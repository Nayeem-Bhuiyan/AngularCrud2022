import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from 'src/app/Model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "https://localhost:44335/api/Employee";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(EmployeeObj): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl, JSON.stringify(EmployeeObj), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  get(id): Observable<any> {
    return this.httpClient.get<Employee>(this.baseUrl+"/" + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseUrl+"/" + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id, EmployeeObj): Observable<Employee> {
    return this.httpClient.put<Employee>(this.baseUrl+"/" + id, JSON.stringify(EmployeeObj), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    

  delete(id){
    return this.httpClient.delete<Employee>(this.baseUrl+"/" + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
