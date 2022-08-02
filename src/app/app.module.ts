import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component'
import { NgzModule } from './ngz/ngz.module';
import { BienvenidosComponent } from './pages/landing-page/section/bienvenidos/bienvenidos.component';
import { PorqueComponent } from './pages/landing-page/section/porque/porque.component';
import { ClubComponent } from './pages/landing-page/section/club/club.component';
import { PlanesComponent } from './pages/landing-page/section/planes/planes.component';
import { ComprarComponent } from './pages/landing-page/section/comprar/comprar.component';
import { FooterComponent } from './layout/footer/footer.component';
//scroll

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BienvenidosComponent,
    PorqueComponent,
    ClubComponent,
    PlanesComponent,
    ComprarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    AppRoutingModule,
    NgzModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
