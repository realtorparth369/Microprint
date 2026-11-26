import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceSecondComponent } from './components/service-second/service-second.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { PrintMediaComponent } from './components/print-media/print-media.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'graphic-design', component: ServiceComponent },
  { path: 'signage-wayfinding', component: ServiceSecondComponent },
  { path: 'digital-marketing', component: DigitalMarketingComponent },
  { path: 'print-media', component: PrintMediaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'print-media/:section', component: PrintMediaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
