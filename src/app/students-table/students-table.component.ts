import { Component, inject, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AppState, selectAll } from '../state/students-selector';
import { Observable } from 'rxjs';
import { StudentsRecords } from '../state/students-record';
import * as Actions from "../state/students-record-action";
import { DemoserviceService } from '../serices/demoservice.service';
@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent implements OnInit {
 

  store = inject(Store);
  demoService = inject(DemoserviceService);
  dataSource : StudentsRecords[]=[];
  dataSource$ : Observable<StudentsRecords[]> = this.store.select(selectAll);
  displayedColumns : string[] =['name','city','country','subject','passportDeclaration','fitnessDeclaration','courseName','date','state','street','subjects','email','phone','postalCode'];


  constructor(){
    this.store.dispatch(Actions.callStudentsRecordApi());
  }

  ngOnInit(): void {
    this.dataSource$.subscribe((data :any)=>{
      this.dataSource = data?.studentRecords;
       console.log(data?.studentRecords);
    });

    this.loadWheatherInfo();

  }

  loadWheatherInfo(){
    this.demoService.logWheatherInfo().subscribe((res)=>{
      debugger;
      console.log(res);
    })
  }


}
