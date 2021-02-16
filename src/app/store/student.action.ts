import { createAction, props } from "@ngrx/store";

export interface StudentInfo {
    lastSelectedId?: number;
}

export const studentAction = createAction("Student Info",props<{student:StudentInfo}>());
