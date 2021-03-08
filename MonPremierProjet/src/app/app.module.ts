import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './dynamic-data/interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicDataComponent,
    HomeComponent,
    InterpolationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
