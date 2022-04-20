import axios from 'axios'

// EXPLAIN USE OF FUNCTION
export const useAddEmployee = async (employeeData) => {
  return await axios.post('/employees', employeeData)
}