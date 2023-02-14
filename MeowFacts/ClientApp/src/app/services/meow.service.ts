import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, mergeMap, repeat, retry, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeowService {
  private index:number = 0;
  private loadedFacts: string[] = [];

  constructor(private http:HttpClient) { }

  getNextFact() {
    const checkResult = map<Fact, Fact>(f => {
      if (this.loadedFacts.includes(f.data[0])) {
        console.log("Found duplicate");
        throwError(() => "Already Exists");
      }

      this.loadedFacts.push(f.data[0]);
      return f;
    })

    const nextFact = map<Fact, FactWithNumber>(x  => { return {
      fact: x.data[0],
      index: this.index++
    }});

    
    
    return nextFact(this.http.get<Fact>('https://meowfacts.herokuapp.com/').pipe(map(f => {
        if (this.loadedFacts.includes(f.data[0])) {
          throw new TypeError(`Already exists`);
        }

        this.loadedFacts.push(f.data[0]);

        return f;
      }),
     retry(7 + this.loadedFacts.length)));
  }

  getNextFacts(numberOfFacts: number) : Observable<FactWithNumber> {
    return this.getNextFact().pipe(repeat(numberOfFacts));
  }

  get factsList(): string[] {
    return this.loadedFacts;
  }
}

interface Fact {
  data: string[]
}

interface FactWithNumber {
  fact: string;
  index: number;
}


