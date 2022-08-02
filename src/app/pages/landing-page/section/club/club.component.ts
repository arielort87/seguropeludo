import { Component, OnInit } from '@angular/core';
import { GlobalServicesService } from 'src/app/Services/global-services.service';
@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  constructor(private GlobalServicesService: GlobalServicesService) { }
  serGlobal = this.GlobalServicesService

  ngOnInit(): void {
  }

}
