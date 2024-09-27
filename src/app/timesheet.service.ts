// src/app/timesheet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) {}

  getEmployeeWorkHours(employeeIds: number[]): Observable<any> {
    return this.http.get(`${this.apiUrl}/work-hours`, { params: { employeeIds: employeeIds.join(',') } });
  }
}