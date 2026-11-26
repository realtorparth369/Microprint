import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ImageSliderModule } from './components/home/imageSlider/imageSlider.module';
import { ImageSlider1Module } from './components/service/imageSlider/imageSlider1.module';
import { ImageSlider2Module } from './components/service-second/imageSlider/imageSlider2.module';

import { ImageSlider6Module } from './components/about/imageSlider/imageSlider6.module';
import { ImageSlider7Module } from './components/contact/imageSlider/imageSlider7.module';

import { ImageSlider4Module } from './components/digital-marketing/imageSlider/imageSlider4.module';
import { ImageSlider5Module } from './components/print-media/imageSlider/imageSlider5.module';

import { ImageSlidersmall3Module } from './components/home/imageSlider3/imageSlider3.module';
import { ImageSlidersmallModule } from './components/home/imageSlider2/imageSlider2.module';
import { ServiceComponent } from './components/service/service.component';
import { ServiceSecondComponent } from './components/service-second/service-second.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { PrintMediaComponent } from './components/print-media/print-media.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


// ./imageSlider/imageSlider.module
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    ServiceSecondComponent,
    DigitalMarketingComponent,
    PrintMediaComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ImageSliderModule,
    ImageSlider1Module,
    ImageSlider2Module,
    ImageSlidersmallModule,
    ImageSlidersmall3Module,
    FormsModule,
    ReactiveFormsModule,
    ImageSlider4Module,
    ImageSlider5Module,
    ImageSlider6Module,
    ImageSlider7Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
