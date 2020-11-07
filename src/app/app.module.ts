import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiKeyInterceptorService} from './models/api-key-interceptor.service';
import {SearchBarModule} from './components/search-bar/search-bar.module';
import {MovieModule} from './components/movie/movie.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    SearchBarModule,
    MovieModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
