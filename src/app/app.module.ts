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
import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { OurSuccessStoryComponentComponent } from './homepage/our-success-story-component/our-success-story-component.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { LightboxModule, CarouselModule, ModalsModule, WavesModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    NavBarHeaderComponent,
    HomepageComponent,
    ImagesliderComponent,
    ClientspageComponent,
    FootercomponentComponent,
    ContactuspageComponent,
    OurSuccessStoryComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot()
,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
