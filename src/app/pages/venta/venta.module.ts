import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { PlanesComponent } from './pages/planes/planes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PlanesComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
    
  ]
})
export class VentaModule { }
