import { configureStore } from "@reduxjs/toolkit";
import employeeTableReducer from "../features/addEmployee/employeesTableSlice"

export default configureStore({
  reducer: {
    employeeTable: employeeTableReducer,
  }
})