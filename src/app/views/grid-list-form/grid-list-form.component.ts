import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GridDataService } from '../../services/grid-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-list-form',
  templateUrl: './grid-list-form.component.html',
  styleUrls: ['./grid-list-form.component.css']
})
export class GridListFormComponent implements OnInit {

  public employeeForm: FormGroup;

  public email: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

  public message: any;

  constructor(public employeeBuilder: FormBuilder, public dataService: GridDataService, public router: Router) {
    this.employeeForm = this.employeeBuilder.group({
      'NAME': [null, Validators.compose([Validators.required])],
      'EMAIL': [null, Validators.compose([Validators.required, Validators.pattern(this.email)])],
      'MOBILE': [null, Validators.compose([Validators.required])],
      'ADDRESS': this.employeeBuilder.group({
        'PINCODE': [null, Validators.compose([Validators.required])],
        'CITY': [null, Validators.compose([Validators.required])],
        'STATE': [null, Validators.compose([Validators.required])],
        'COUNTRY': [null, Validators.compose([Validators.required])]
      })
    });
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  getAllValues() {
    this.message = {
      'SNo': this.message.SNo, 'Name': this.employeeForm.controls['NAME'].value, 'Email': this.employeeForm.controls['EMAIL'].value, 'Mobile': this.employeeForm.controls['MOBILE'].value
    }
    this.dataService.DataSharing(this.message);

    console.log(this.message);

    //form Validation with Click 
    if (this.employeeForm.invalid) {
      this.employeeForm.controls['NAME'].markAsTouched();
      this.employeeForm.controls['EMAIL'].markAsTouched();
      this.employeeForm.controls['MOBILE'].markAsTouched();
      this.employeeForm.controls['ADDRESS'].controls['PINCODE'].markAsTouched();
      this.employeeForm.controls['ADDRESS'].controls['CITY'].markAsTouched();
      this.employeeForm.controls['ADDRESS'].controls['STATE'].markAsTouched();
      this.employeeForm.controls['ADDRESS'].controls['COUNTRY'].markAsTouched();
      return;
    } else if (this.employeeForm.valid) {
      this.router.navigate(['/gridList']); //Once Form Valid it will redirect to the GridList page
    }
  }

}
