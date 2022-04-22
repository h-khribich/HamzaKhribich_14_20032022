import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  error: null,
  employees: []
}

export const employeesTableSlice = createSlice({
  name: "employeesTable",
  initialState: initialState,
  reducers: {
    resetState: state => initialState,
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    }
  }
})

export const { resetState, addEmployee } = employeesTableSlice.actions

export default employeesTableSlice.reducer