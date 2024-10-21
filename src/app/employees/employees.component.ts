import { Component, inject } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { NgFor, AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [NgFor, AsyncPipe, DatePipe, RouterLink, NgIf]
})
export class EmployeesComponent {
  protected employees$ = inject(EmployeeService).getEmployees();
}