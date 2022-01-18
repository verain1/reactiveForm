import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';


@Component({
  selector: 'app-courseR',
  templateUrl: './courseDetailsR.component.html'
})
export class courseDetailRComponent {
  
  frmGroup!: FormGroup;
  empGroup !: FormGroup;

  //frmBuilder is object of FormBuilder class
  constructor( private frmBuilder: FormBuilder ) //This is very important
  { //Now creating a model for defining the structure for UI
    this.frmGroup = this.frmBuilder.group({
      "courseID": "",
      "courseName": "",
      "courseFee": ""
    })

    this.empGroup = this.frmBuilder.group({
      "EmpID": "",
      "EmpName": "",
      "EmpAge": ""
    })
  }

  saveCourse(temp: any)
  {
    console.log(temp);
  }

  // saveEmp(emp: any)
  // {
  //   console.log(emp);
  // }

}