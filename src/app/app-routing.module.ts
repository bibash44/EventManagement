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
    path: 'admin',

    children: [
      {
        path: 'login',
        component: AdminLoginPageComponent
      },


    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
