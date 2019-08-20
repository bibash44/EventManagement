import { AdminServicePageComponent } from './adminpage/admin-service-page/admin-service-page.component';
import { AdminPortfolioPageComponent } from './adminpage/admin-portfolio-page/admin-portfolio-page.component';
import { AboutpageComponent } from './adminpage/aboutpage/aboutpage.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { WeedingComponentComponent } from './services-page/weeding-component/weeding-component.component';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { ClientspageComponent } from './clientspage/clientspage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceMainComponentComponent } from './services-page/service-main-component/service-main-component.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { ClientsPageComponent } from './adminpage/clients-page/clients-page.component';
import { ContactCreateComponent } from './adminpage/contact-page/formcomponent/contact-create/contact-create.component';
import { ContactPageComponent } from './adminpage/contact-page/contact-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { activehome: 'activehome' }
  },

  {
    path: 'clients',
    component: ClientspageComponent,
    data: { activeclient: 'activeclient' }
  },

  {
    path: 'contact',
    component: ContactuspageComponent,
    data: { activecontact: 'activecontact' }
  },

  {
    path: 'services',
    component: ServiceMainComponentComponent,
    data: { activservice: 'activeservice' }
  },

  {
    path: 'portfolio',
    component: PortfolioPageComponent,
    data: { activeportfolio: 'activeportfolio' }
  },

  {
    path: 'review',
    component: ReviewPageComponent,
    data: { activepreview: 'activepreview' }
  },

  {
    path: 'about',
    component: AboutUsPageComponent,
    data: { aboutactive: 'aboutactive' }
  },






  {
    path: 'admin',

    children: [
      {
        path: 'login',
        component: AdminLoginPageComponent
      },

      {
        path: 'about',
        component: AboutpageComponent ,
        data: { aboutactive: 'aboutactive' }
      },

      {
        path: 'clients',
        component: ClientsPageComponent,
        data: { activeclient: 'activeclient' }
      },

      {
        path: 'contact',
        component: ContactPageComponent,
        data: { activecontact: 'activecontact' }
      },

      {
        path: 'portfolio',
        component: AdminPortfolioPageComponent,
        data: { activeportfolio: 'activeportfolio' }
      },

      {
        path: 'services',
        component: AdminServicePageComponent,
        data: { activservice: 'activeservice' }
      },


    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
