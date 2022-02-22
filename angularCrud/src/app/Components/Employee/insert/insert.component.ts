import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {


  frmData: FormGroup;






  constructor(
    public dataService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb : FormBuilder
  )
  { }
   
  ngOnInit(): void {

    this.frmData = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });


  }
    


  get f(){
    return this.frmData.controls;
  }

      
  submitFormData(){
    this.dataService.create(this.frmData.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('EmpList');
    })
  }

}
