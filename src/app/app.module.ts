import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstTsComponent } from './first-ts/first-ts.component';
import { AppRoutingModule } from './app-routing.module';
import { SoLieuComponent } from './so-lieu/so-lieu.component';
import { TestCssComponent } from './test-css/test-css.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTsComponent,
    SoLieuComponent,
    TestCssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
