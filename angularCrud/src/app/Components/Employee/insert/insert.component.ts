import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
    Swal.fire({
      title: 'Are you sure',
      text: 'You want to Save This?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Save it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {

        this.dataService.create(this.frmData.value).subscribe(res => {
         
        Swal.fire(
          'Success!',
          'Save Data Successfully!!',
          'success'
        )
          this.router.navigateByUrl('EmpList');
         })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
       
      }



    })

   
  }

}
