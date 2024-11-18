import { createReducer, on } from "@ngrx/store";
import { StudentsRecords } from "./students-record";
import * as Actions from "../state/students-record-action";

export const initState :{studentRecords : StudentsRecords[]} = {
    studentRecords:[{
        name: "Shivprasad",
    city: "Pune",
    country:"India",
    subject:"Computer",
    passportDeclaration: "Yes",
    fitnessDeclaration : "Yes",
    courseName : "Computer Science",
    date : "02-08-1989",
    state : "Maharashtra",
    street: "SNBP road",
    subjects: "Java",
    email : "indewars@gmail.com",
    phone : "9860412165",
    postalCode : "12345"
    }]
};

export const studentsReducer = createReducer(
    initState,
    on(Actions.callStudentsRecordApiSuccess, 
        (state: any, { payload }: any) => ({...state, studentRecords:payload})
    )
);