import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: ""
}

export const employeesTableSlice = createSlice({
  name: "employeesTable",
  initialState: initialState,
  reducers: {
    resetState: state => initialState,
    addEmployee: (state, action) => {
      console.log(action);
      // state.firstName = action.payload.firstName
      // state.lastName = action.payload.lastName
      // state.dateOfBirth = action.payload.dateOfBirth
      // state.startDate = action.payload.startDate
      // state.street = action.payload.street
      // state.city = action.payload.city
      // state.state = action.payload.state
      // state.zipCode = action.payload.zipCode
      // state.department = action.payload.department
    }
  }
})

export const { resetState, addEmployee } = employeesTableSlice.actions

export default employeesTableSlice.reducer