import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  EmployeeObject: Employee;






  constructor(
    public dataService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  )
  { }
   
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.dataService.find(this.id).subscribe((data: Employee)=>{
    this.EmployeeObject = data;  
    });
     




  }

}
