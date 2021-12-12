import { Exercise1Component } from './exercise1/exercise1.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './exercise1/header/header.component';
import { FooterComponent } from './exercise1/footer/footer.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { HeaderEx2Component } from './exercise2/header-ex2/header-ex2.component';
import { FooterEx2Component } from './exercise2/footer-ex2/footer-ex2.component';
import { CarouselEx2Component } from './exercise2/carousel-ex2/carousel-ex2.component';
import { CollectionComponent } from './exercise2/collection/collection.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Exercise1Component,
    HeaderComponent,
    FooterComponent,
    Exercise2Component,
    HeaderEx2Component,
    FooterEx2Component,
    CarouselEx2Component,
    CollectionComponent,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
