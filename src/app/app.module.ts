
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
import { ReviewPageComponent } from './review-page/review-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { WeedingImagesComponent } from './portfolio-page/weeding-images/weeding-images.component';
import { BirthdayImagesComponent } from './portfolio-page/birthday-images/birthday-images.component';
import { PartyImagesComponent } from './portfolio-page/party-images/party-images.component';
import { AllImagesComponent } from './portfolio-page/all-images/all-images.component';
import { ReviewSectionComponentComponent } from './review-page/review-section-component/review-section-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewFormComponent } from './review-page/review-form/review-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AdminNavComponent } from './adminpage/admin-nav/admin-nav.component';
import { AboutpageComponent } from './adminpage/aboutpage/aboutpage.component';
import { AboutEditComponent } from './adminpage/aboutpage/formcomponent/about-edit/about-edit.component';
import { AboutCreateComponent } from './adminpage/aboutpage/formcomponent/about-create/about-create.component';
import { ClientsPageComponent } from './adminpage/clients-page/clients-page.component';
import { ClientCreateComponent } from './adminpage/clients-page/formcomponent/client-create/client-create.component';
import { ClientEditComponent } from './adminpage/clients-page/formcomponent/client-edit/client-edit.component';
import { ContactPageComponent } from './adminpage/contact-page/contact-page.component';
import { ContactCreateComponent } from './adminpage/contact-page/formcomponent/contact-create/contact-create.component';
import { AdminPortfolioPageComponent } from './adminpage/admin-portfolio-page/admin-portfolio-page.component';
import { ProtfolioCreateComponent } from './adminpage/admin-portfolio-page/formcomponent/protfolio-create/protfolio-create.component';
import { ProtfolioEditComponent } from './adminpage/admin-portfolio-page/formcomponent/protfolio-edit/protfolio-edit.component';
import { AdminServicePageComponent } from './adminpage/admin-service-page/admin-service-page.component';
import { ServiceCreateComponent } from './adminpage/admin-service-page/formcomponent/service-create/service-create.component';
import { ServiceEditComponent } from './adminpage/admin-service-page/formcomponent/service-edit/service-edit.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ServicesDisplayEditComponent } from './admin-homepage/form-component/services/services-display-edit/services-display-edit.component';
import { ServicesDisplayCreateComponent } from './admin-homepage/form-component/services/services-display-create/services-display-create.component';
import { SlidingImageCreateComponent } from './admin-homepage/form-component/slidingimage/sliding-image-create/sliding-image-create.component';
import { SlidingImageEditComponent } from './admin-homepage/form-component/slidingimage/sliding-image-edit/sliding-image-edit.component';
import { SuccessStoryCreateComponent } from './admin-homepage/form-component/success-story/success-story-create/success-story-create.component';
import { SuccessStoryEditComponent } from './admin-homepage/form-component/success-story/success-story-edit/success-story-edit.component';
import { AdminReviewComponent } from './adminpage/admin-review/admin-review.component';
import { ReviewEditComponent } from './adminpage/admin-review/review-edit/review-edit.component';
import { BookingComponent } from './adminpage/admin-service-page/booking/booking.component';
import { BookingEditComponent } from './adminpage/admin-service-page/booking/booking-edit/booking-edit.component';

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
    AdminLoginPageComponent,
    ReviewPageComponent,
    PortfolioPageComponent,
    WeedingImagesComponent,
    BirthdayImagesComponent,
    PartyImagesComponent,
    AllImagesComponent,
    ReviewSectionComponentComponent,
    ReviewFormComponent,
    AboutUsPageComponent,
    AdminNavComponent,
    AboutpageComponent,
    AboutEditComponent,
    AboutCreateComponent,
    ClientsPageComponent,
    ClientCreateComponent,
    ClientEditComponent,
    ContactPageComponent,
    ContactCreateComponent,
    AdminPortfolioPageComponent,
    ProtfolioCreateComponent,
    ProtfolioEditComponent,
    AdminServicePageComponent,
    ServiceCreateComponent,
    ServiceEditComponent,
    AdminHomepageComponent,
    ServicesDisplayEditComponent,
    ServicesDisplayCreateComponent,
    SlidingImageCreateComponent,
    SlidingImageEditComponent,
    SuccessStoryCreateComponent,
    SuccessStoryEditComponent,
    AdminReviewComponent,
    ReviewEditComponent,
    BookingComponent,
    BookingEditComponent,

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
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
