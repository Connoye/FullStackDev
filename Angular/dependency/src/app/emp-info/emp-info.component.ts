import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromServiceClass1() {
    this, this.infoReceived1 = this.rService.getInfo1();
  }

  getInfoFromServiceClass2() {
    this, this.infoReceived2 = this.rService.getInfo2();
  }

  getInfoFromServiceClass3() {
    this, this.infoReceived3 = this.rService.getInfo3();
  }

  constructor(
    private rService:RecordsService
  ) { 

  }

  ngOnInit(): void {
  }

}
