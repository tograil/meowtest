import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  private spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public spinnerObservable$: Observable<boolean> = this.spinnerSubject.asObservable();

  public showSpinner() {
    this.spinnerSubject.next(true);
  }

  public hideSpinner() {
    this.spinnerSubject.next(false);
  }
}
