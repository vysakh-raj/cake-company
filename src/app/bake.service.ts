import { Injectable } from '@angular/core';
import { MyData } from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class BakeService {

  constructor() { }
  giveData()
  {
    return MyData;
  }
}
