export const columns = [
  {
    name: "Firstname",
    selector: row => row.firstName,
    sortable: true,
  },
  {
    name: "Lastname",
    selector: row => row.lastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: row => row.startDate,
    sortable: true,
  },
  {
    name: "Department",
    selector: row => row.department,
    sortable: true,
  },
  {
    name: "Date of birth",
    selector: row => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "Street",
    selector: row => row.street,
    sortable: true,
  },
  {
    name: "City",
    selector: row => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: row => row.state,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: row => row.zipCode,
    sortable: true,
  },
]