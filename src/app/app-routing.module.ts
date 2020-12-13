import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontPageComponent } from './components/front-page/front-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AdPageComponent } from './components/ad-page/ad-page.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [ 
  { path: '', component: FrontPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'ad', component: AdPageComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

