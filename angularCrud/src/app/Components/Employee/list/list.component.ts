import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';

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
    this.dataService.delete(id).subscribe(res => {
         this.EmployeeAllData = this.EmployeeAllData.filter(item => item.id !== id);
         console.log('Post deleted successfully!');

    })
  }



}
