import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { Tab1Page } from './tab1.page';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Tab1Page],
  imports: [BrowserModule],
  exports: [Tab1Page],
})
export class Tab1Module {}
