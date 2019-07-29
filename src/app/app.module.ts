import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarHeaderComponent } from './nav-bar-header/nav-bar-header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImagesliderComponent } from './homepage/imageslider/imageslider.component';
import { ClientspageComponent } from './clientspage/clientspage.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarHeaderComponent,
    HomepageComponent,
    ImagesliderComponent,
    ClientspageComponent,
    FootercomponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
