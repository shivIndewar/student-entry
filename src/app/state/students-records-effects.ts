import { inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { StudentsRecordServiceService } from "../serices/students-record-service.service";
import { actionsList } from "./students-record-action";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";

@Injectable()
export class StudentsRecordsEffects{
    studentsRecordsService = inject(StudentsRecordServiceService);
    actions$ =inject(Actions);
    // constructor(private actions$ : Actions){}
    loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(actionsList.callStudentsRecordApi),
        exhaustMap(() => this.studentsRecordsService.getStudentsRecords()
        .pipe(
            map(studentsRecords => ({ type: actionsList.callStudentsRecordApiSuccess, payload: studentsRecords })),
            catchError(() => EMPTY)
        )
    )
    ));
}

