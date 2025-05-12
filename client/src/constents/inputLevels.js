const signUpLabels = {
  username: 'Username',
  email: 'Email',
  password: 'Password',
}
const loginLabels = {
  username: 'Username',
  password: 'Password',
}
const forgetPasswordLabels = {
  email: 'Email',
  newPassword: 'New Password',
}
// __________________________________________________________
const appoinmentFormLabels = {
  patientName: 'Name',
  dob: 'Date of Birth',
  sex: 'Gender',
  phoneNo: 'Phone number',
  email: 'Email',
  address: 'Address',
  city: 'City',
  pinCode: 'Pin Code',
  state: 'State',

}
const appoinmentFormLabels1 = {
  appointmentDate: 'Appoinment Date',
  appointmentTime: 'Appointment time',
  attendedDoctor: 'Attending Doctor',
  department: 'Department',
  bystandname:"Bystand Name",
  bystandphoneno:"Bystand Phone"
  // attender: 'Attender',
  // preExistingCondition: 'Pre Existing Condition',
  // reports: 'Reports',
  // reportFile: 'Report Files',
  // billName: 'Bill Name',
  // paymentStatus: 'Payment Status',
  // status: 'Status',
}

// ____________________________________________________________________________________________________________

const appointmentColumn = Object.entries(appoinmentFormLabels).map(([key, label]) => ({
  field: key,
  headerName: label,
}));
const generateDummyRows = () => {
  const dummyRows = [];

  for (let i = 1; i <= 20; i++) {
    dummyRows.push({
      id: i, 
      patientName: `Patient ${i}`,
      dob: `199${Math.floor(Math.random() * 10)}-0${Math.floor(Math.random() * 9) + 1}-1${Math.floor(Math.random() * 9)}`,
      sex: i % 2 === 0 ? 'Male' : 'Female',
      phoneNo: `99999${Math.floor(100000 + Math.random() * 899999)}`,
      email: `patient${i}@example.com`,
      address: `Address ${i}`,
      city: `City ${i}`,
      pinCode: `1100${Math.floor(10 + Math.random() * 89)}`,
      state: `State ${i}`,
      appointmentDate: `2024-10-${String(Math.floor(10 + Math.random() * 20)).padStart(2, '0')}`,
      appointmentTime: `${String(Math.floor(9 + Math.random() * 8)).padStart(2, '0')}:00`,
      attendedDoctor: `Dr. Smith ${i}`,
      department: `Department ${i % 5 + 1}`,
      attender: `Attender ${i}`,
      preExistingCondition: i % 3 === 0 ? 'None' : 'Condition ' + (i % 3),
      reports: `Report ${i}`,
      reportFile: `File ${i}`,
      billName: `Bill ${i}`,
      paymentStatus: i % 2 === 0 ? 'Paid' : 'Pending',
      status: i % 2 === 0 ? 'Completed' : 'Pending',
    });
  }

  return dummyRows;
};

const dummyRows = generateDummyRows();

// __________________________________________________________________________________________________________________

const passwordFieldList = ['password', 'newPassword']

export {
  signUpLabels,
  loginLabels,
  forgetPasswordLabels,
  passwordFieldList,

  
  appoinmentFormLabels,
  appoinmentFormLabels1,
  appointmentColumn,
  dummyRows
}
