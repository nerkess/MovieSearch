import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchBarModule} from './components/search-bar/search-bar.module';
import {MovieModule} from './components/movie/movie.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiKeyInterceptorService, AuthModule} from 'tmdb-service';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatGridListModule,

        SearchBarModule,
        MovieModule,
        AuthModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
