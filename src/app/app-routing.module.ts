import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { VentaComponent } from './pages/venta/venta.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'

  },
  {
    path: 'inicio',
    component: LandingPageComponent
  },
  {
    path: 'venta',
    component: VentaComponent,
    loadChildren: () => import('./pages/venta/venta.module').then( m => m.VentaModule )

  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
