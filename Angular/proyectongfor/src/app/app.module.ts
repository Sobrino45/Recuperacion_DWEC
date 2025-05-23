import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { Error404Component } from './error404/error404.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercadeComponent,
    ListadoproductosComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
