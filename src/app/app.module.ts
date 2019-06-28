import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
import localeExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeES, 'es', localeExtra);

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
