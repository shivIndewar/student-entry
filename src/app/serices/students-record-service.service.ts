import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentsRecords } from '../state/students-record';

@Injectable({
  providedIn: 'root'
})
export class StudentsRecordServiceService {

  constructor(private http: HttpClient) { }
  studentsRecs : any=[];
  getStudentsRecords(){
    debugger;
     return this.http.get<Array<StudentsRecords>>("http://localhost:3000/studentsRecords");
  }

}
