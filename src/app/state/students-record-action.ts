import { createAction, props } from "@ngrx/store";
import { StudentsRecords } from "./students-record";

export const actionsList ={
    callStudentsRecordApi : "[Students Table Component] call student record api",
    callStudentsRecordApiSuccess: "[Students Table Component] call student record api success"
};

export const callStudentsRecordApi = createAction(actionsList.callStudentsRecordApi);
export const callStudentsRecordApiSuccess = createAction(actionsList.callStudentsRecordApiSuccess, props<{payload : StudentsRecords[]}>());
