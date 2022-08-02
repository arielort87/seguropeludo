import { Component, OnInit } from '@angular/core';
import { GlobalServicesService } from 'src/app/Services/global-services.service';
@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  constructor(private GlobalServicesService: GlobalServicesService) { }
  serGlobal = this.GlobalServicesService

  ngOnInit(): void {
  }
  checked = true

}
