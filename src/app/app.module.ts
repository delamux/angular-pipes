import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
import localeExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeES, 'es', localeExtra);

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SafetyDomPipe } from './pipes/safety-dom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SafetyDomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
