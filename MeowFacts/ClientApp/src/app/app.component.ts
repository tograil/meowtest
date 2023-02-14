import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, OverlayOptions } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  overlayVisible: boolean = false;
  constructor(private primengConfig: PrimeNGConfig) {
      this.primengConfig.overlayOptions = {
        mode: 'modal',
        appendTo: 'body',
        //autoZIndex: true,
        baseZIndex: 20000,
        responsive: {
          direction: 'center'
        }
    };
  }

  ngOnInit(): void {
    
  }

  toggle() {
    this.overlayVisible = !this.overlayVisible;
  }
  title = 'app';
}
