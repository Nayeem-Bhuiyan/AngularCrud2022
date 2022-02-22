import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
    this.dataService.update(this.id,this.frmData.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('EmpList');
    })


    Swal.fire({
      title: 'Are you sure',
      text: 'You want to Save This?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Save it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {

        this.dataService.update(this.id,this.frmData.value).subscribe(res => {
         
        Swal.fire(
          'Success!',
          'Update Data Successfully!!',
          'success'
        )
          this.router.navigateByUrl('EmpList');
         })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
       
      }



    })

  }



}
