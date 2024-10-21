import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, DocumentData, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);

  // Retrieve all employees
  getEmployees(): Observable<Employee[]> {
    const employeesCollection = collection(this.firestore, 'employees');
    return collectionData(employeesCollection, { idField: 'id' }) as Observable<Employee[]>;
  }

  // Add a new employee
  addEmployee(employee: Employee): Promise<DocumentReference<DocumentData>> {
    const employeesCollection = collection(this.firestore, 'employees');
    return addDoc(employeesCollection, { ...employee });
  }
}