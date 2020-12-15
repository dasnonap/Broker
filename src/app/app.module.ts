import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AdPageComponent } from './components/ad-page/ad-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListingsComponent } from './components/listings/listings.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    AboutPageComponent,
    AdPageComponent,
    ContactComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
