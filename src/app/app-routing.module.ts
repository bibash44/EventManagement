import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { ClientspageComponent } from './clientspage/clientspage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
