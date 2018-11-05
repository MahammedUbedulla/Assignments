import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  public gridsList: any = [
    { 'SNo': 1, 'Name': 'Sam', 'Email': 'sam@gmail.com', 'Mobile': 9666293535 },
    { 'SNo': 2, 'Name': 'Chay', 'Email': 'chay@gmail.com', 'Mobile': 9666294567 },
    { 'SNo': 3, 'Name': 'Shaj', 'Email': 'shaj@gmail.com', 'Mobile': 9666292345 },
    { 'SNo': 4, 'Name': 'Ubed', 'Email': 'ubed@gmail.com', 'Mobile': 9666291234 },
  ]

  private defaultData = new BehaviorSubject("init");
  currentMessage = this.defaultData.asObservable();

  constructor() { }

  DataSharing(message) {
    // this.defaultData.next(message)
    this.gridsList.forEach(obj => {
      if (obj.SNo == message.SNo) {
        obj = message;
        this.defaultData.next(message);
      }
    });
  }

}
