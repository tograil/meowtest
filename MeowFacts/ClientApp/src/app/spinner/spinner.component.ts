import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  loading:boolean = false;
  constructor(private spinnerService:SpinnerService) {
    this.spinnerService.spinnerObservable$.subscribe(state => this.loading = state);
  }
}
