import { Component, OnInit } from '@angular/core';
import { GlobalServicesService } from 'src/app/Services/global-services.service';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.scss']
})
export class BienvenidosComponent implements OnInit {

  constructor(private GlobalServicesService: GlobalServicesService) { }
  serGlobal = this.GlobalServicesService
  ngOnInit(): void {
  }


}
