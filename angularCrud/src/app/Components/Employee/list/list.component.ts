import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  EmployeeAllData: Employee[] = [];

  constructor(public dataService: EmployeeService) { }
   
  ngOnInit(): void {
    this.dataService.getAll().subscribe((data: Employee[])=>{
      this.EmployeeAllData = data;
      console.log(this.EmployeeAllData);
    })  
  }
   

  deleteEmployee(id){

    Swal.fire({
      title: 'Are you sure',
      text: 'You want to Delete This?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.dataService.delete(id).subscribe(res => {
          this.EmployeeAllData = this.EmployeeAllData.filter(item => item.id !== id);
          Swal.fire(
            'Success!',
            'Successfully Deleted!!',
            'success'
          )

     })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
       
      }

    })
  }



}
