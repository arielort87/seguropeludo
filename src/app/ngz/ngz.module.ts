import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

const ngzcomponent = [
  NzIconModule,
  NzGridModule,
  NzModalModule,
  NzCheckboxModule
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
