import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';

const ngzcomponent = [
  NzIconModule,
  NzGridModule,
  NzModalModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngzcomponent
  ],
  exports: [
    ngzcomponent
  ]
})
export class NgzModule { }
