import { createReducer, on } from "@ngrx/store";
import { studentAction, StudentInfo } from "./student.action";

export const initialState: StudentInfo = {
};

export const studentReducer = createReducer(initialState, on(studentAction, (state, { student }) => ({ lastSelectedId: student.lastSelectedId })));