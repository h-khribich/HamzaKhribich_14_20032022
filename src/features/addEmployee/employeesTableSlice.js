import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: false,
  error: null,
  employee: {
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
}

export const updateEmployeeTable = createAsyncThunk('employeeTable/updateEmployeeTable', async (employeeData) => {
  try {
    const response = axios.post("http://localhost:3000/employeeData", employeeData)
    const data = await response
    console.log(data);
    return data
  }
  catch(error) {
    throw Error(error)
  }
})

export const employeesTableSlice = createSlice({
  name: "employeesTable",
  initialState: initialState,
  reducers: {
    resetState: state => initialState,
    addEmployee: (state, action) => {
      console.log(action);
      state.employee.firstName = action.payload.firstName
      state.employee.lastName = action.payload.lastName
      state.employee.dateOfBirth = action.payload.dateOfBirth
      state.employee.startDate = action.payload.startDate
      state.employee.street = action.payload.street
      state.employee.city = action.payload.city
      state.employee.state = action.payload.state
      state.employee.zipCode = action.payload.zipCode
      state.employee.department = action.payload.department
    }
  },
  extraReducers: {
    [updateEmployeeTable.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [updateEmployeeTable.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [updateEmployeeTable.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    }
  }
})

export const { resetState, addEmployee } = employeesTableSlice.actions

export default employeesTableSlice.reducer