import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})
export class EInfoComponent implements OnInit {

  infoEmp1: string[] = [];
  infoEmp2: string[] = [];
  infoEmp3: string[] = [];

  constructor(private dataServ : DataService) { }

  getInfoFromService1() {
    this.infoEmp1 = this.dataServ.getInfoEmp1();
  }

  getInfoFromService2() {
    this.infoEmp2 = this.dataServ.getInfoEmp2();
  }

  getInfoFromService3() {
      this.infoEmp3 = this.dataServ.getInfoEmp3();
  }

  updateInfo(frm: any) {
    this.dataServ.addInfo(frm.value.location);
  }
  
  ngOnInit(): void {
  }

}
