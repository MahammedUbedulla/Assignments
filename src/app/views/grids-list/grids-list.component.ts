import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridDataService } from '../../services/grid-data.service';

@Component({
  selector: 'app-grids-list',
  templateUrl: './grids-list.component.html',
  styleUrls: ['./grids-list.component.css']
})
export class GridsListComponent implements OnInit {

  public gridsList: any = [];
  public message: any;

  constructor(public router: Router, public dataService: GridDataService) { }

  ngOnInit() {
    this.gridsList = this.dataService.gridsList;
    // Sharing Data 
    this.dataService.currentMessage.subscribe(message => {

      this.message = message;
     // console.log(message);

      // this.gridsList.forEach((el,index,arr) => {              //Comparing the two Objects SNo
      //   if(this.gridsList[index].SNo === this.message.SNo){
      //     this.gridsList[index] = message;
      //   }
      // });
      //console.log(this.gridsList);
    });

  }

  public selectValue: any; 
  
  NavigateLink(selected: any){
    this.selectValue = selected;
    console.log(this.selectValue.SNo)

    // Sharing Data 
    this.dataService.DataSharing(this.selectValue); 
    this.router.navigate(['/gridlistform']);
  }

  //Add Delete Rows in Table

  // private rowArray: any = this.gridsList;
  // private arrayObj: any = {};

  // addRow() {
  //     this.rowArray.push(this.arrayObj)
  //     this.arrayObj = {};
  // }

  // deleteRow(index) {
  //     this.rowArray.splice(index, 1);
  // }


  // //Table add 

  // public tableArray: any = [];
  // public tableObj: any = {};
  
  // addTable(){
  //   this.tableArray.push(this.tableObj);
  //   this.tableObj = {};
  // }
  // deleteTable(i){
  //   this.tableArray.splice(i, 1);
  // }

}
