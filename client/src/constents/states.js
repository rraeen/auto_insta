const signUpState = {
  username: '',
  email: '',
  password: '',
}
const loginState = {
  username: '',
  password: '',
}
const forgetPasswordState = {
  email: '',
  newPassword: '',
}

const appoinmentFormState = {
  patientName: '',
  dob: '',
  sex: '',
  appointmentDate: '',
  appointmentTime: '',
  phoneNo: '',
  email: '',
  address: '',
  city: '',
  pinCode: '',
  state: '',
  attendedDoctor: '',
  department: '',
  attender: '',
  preExistingCondition: '',
  reports: '',
  reportFile: '',
  billName: '',
  paymentStatus: '',
  status: '',
}
const appoinmentFormState1 = {
  attendedDoctor: '',
  department: '',
  attender: '',
  preExistingCondition: '',
  reports: '',
  reportFile: '',
  billName: '',
  paymentStatus: '',
  status: '',
}

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 11, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 12, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]

export {
  signUpState,
  loginState,
  forgetPasswordState,

  
  appoinmentFormState,
  appoinmentFormState1,
  rows,
  columns,
}
