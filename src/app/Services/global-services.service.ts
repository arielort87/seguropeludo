import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }
  scroll(id:string) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id,
    });
  }
}
