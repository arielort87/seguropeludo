import { Component, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
  }
  scroll(id:string) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: id,
    });
  }

}
