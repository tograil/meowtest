import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { MeowListComponent } from './meow-list/meow-list.component';
import { LoggedInGuard } from './guards/logged-in.guard';

import { CheckboxModule}  from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    MeowListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    StyleClassModule,
    VirtualScrollerModule,
    SkeletonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/meow', pathMatch: 'full' },
      { path: 'meow', component: MeowListComponent, canActivate: [ LoggedInGuard ] },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
