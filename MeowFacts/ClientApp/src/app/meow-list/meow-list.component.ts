import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { LazyLoadEvent, SelectItem } from 'primeng/api';
import { MeowService } from '../services/meow.service';
import { CatFact } from '../dto/cat-fact';

@Component({
  selector: 'app-meow-list',
  templateUrl: './meow-list.component.html',
  styleUrls: ['./meow-list.component.scss']
})
export class MeowListComponent implements OnInit {
  
  virtualCatFacts: CatFact[] = [];

  sortOptions: SelectItem[] = [];

  allFactsLoaded: boolean = false;

  constructor(private productService: ProductService, private meowService: MeowService) {
    
  }

  ngOnInit(): void {
    if (this.meowService.factsList.length > 0) {
        this.virtualCatFacts =  this.meowService.factsList.map((fact, index) => {
          return {
            fact: fact,
            number: index + 1
          }}); 
      }
      else {
        this.virtualCatFacts = Array.from({ length: 11 });
        this.meowService.getNextFacts(11).subscribe(x => {
          this.virtualCatFacts[x.index] = {
            fact: x.fact,
            number: x.index + 1
          };
        });
      }
    
    this.sortOptions = [
      { label: 'Cheapest First', value: 'price' },
      { label: 'Expensive First', value: '!price' },
    ];
  }

  async loadCatsLazy(event: LazyLoadEvent) {
    
    if (!this.allFactsLoaded && (event.last!) >= this.virtualCatFacts.length) {
        this.virtualCatFacts = [...this.virtualCatFacts, ...Array.from<CatFact>({ length: event.rows! })];
        this.meowService.getNextFacts(event.rows!).subscribe({next:x => {
            this.virtualCatFacts[x.index] = {
              fact: x.fact,
              number: x.index + 1
            }
          },
          error: err => {
            this.allFactsLoaded = true;
            this.virtualCatFacts = this.meowService.factsList.map((fact, index) => {
              return {
                fact: fact,
                number: index + 1
              }})
          }
        });
    }
  }
}
