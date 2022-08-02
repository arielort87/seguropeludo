import { Component, OnInit } from '@angular/core';
import { GlobalServicesService } from 'src/app/Services/global-services.service';
@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  constructor(private GlobalServicesService: GlobalServicesService) { }
  serGlobal = this.GlobalServicesService
  ngOnInit(): void {
  }

}
