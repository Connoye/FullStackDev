import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[] = ["Raeshawn Gordon", "E-5000", "rea@test.com"]
  info2: string[] = ["Krystal Gordon", "E-6000", "kris@test.com"]
  info3: string[] = ["Nailah Gordon", "E-7000", "nai@test.com"]
  
  getInfo1(): string[]{
    return this.info1
  }

  getInfo2(): string[]{
    return this.info2
  }

  getInfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
