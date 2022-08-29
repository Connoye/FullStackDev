import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  infoEmp1: string[] = ["Jon Menas", "E-9099", "jon@text.com"];
  infoEmp2: string[] = ["Jane Menas", "E-9199", "jane@text.com"];
  infoEmp3: string[] = ["Kim Menas","E-9299","kim@text.com"];

  getInfoEmp1() :string[]{
    return this.infoEmp1;
  }

  getInfoEmp2() :string[]{
    return this.infoEmp2;
   }
  
   getInfoEmp3() :string[]{
    return this.infoEmp3;
   }
  
  addInfo(info: any) {
    this.infoEmp1.push(info);  
    this.infoEmp2.push(info);
    this.infoEmp3.push(info);
    return this.infoEmp1;
  }

  constructor() { }
}
