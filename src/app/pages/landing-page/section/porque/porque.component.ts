import { Component, OnInit } from '@angular/core';
import { GlobalServicesService } from 'src/app/Services/global-services.service';
@Component({
  selector: 'app-porque',
  templateUrl: './porque.component.html',
  styleUrls: ['./porque.component.scss']
})
export class PorqueComponent implements OnInit {

  constructor(private GlobalServicesService: GlobalServicesService) { }
  serGlobal = this.GlobalServicesService
  ngOnInit(): void {
  }

}
