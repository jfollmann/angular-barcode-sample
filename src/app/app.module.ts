import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ScannerDetectionModule} from 'ngx-scanner-detection';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ScannerDetectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
