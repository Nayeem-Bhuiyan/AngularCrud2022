import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  EmployeeObject: Employee;
  frmData: FormGroup;






  constructor(
    public dataService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb : FormBuilder
  )
  { }
   
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.dataService.find(this.id).subscribe((data: Employee)=>{
    this.EmployeeObject = data;  
    });
     

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
    console.log(this.frmData.value);
    this.dataService.create(this.frmData.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('EmpList');
    })
  }
}
