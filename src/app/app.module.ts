import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ServeicesPageComponent } from './homepage/service-component/services-page.component';
import { WeedingComponentComponent } from './services-page/weeding-component/weeding-component.component';


import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import { ServiceMainComponentComponent } from './services-page/service-main-component/service-main-component.component';
import { BirthdayComponentComponent } from './services-page/birthday-component/birthday-component.component';
import { BookingFormComponentComponent } from './services-page/booking-form-component/booking-form-component.component';
import { PartyComponentComponent } from './services-page/party-component/party-component.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';


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
    ServeicesPageComponent,
    WeedingComponentComponent,
    ServiceMainComponentComponent,
    BirthdayComponentComponent,
    BookingFormComponentComponent,
    PartyComponentComponent,
    AdminLoginPageComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
