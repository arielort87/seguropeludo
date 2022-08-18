import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanesComponent } from './pages/planes/planes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'planes', component: PlanesComponent
      },
      { path: '**', redirectTo: 'planes' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
