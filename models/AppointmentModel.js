// models/Appointment.js

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', 
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
  idProve:{
    type: String,
  },
  idNumber:{
    type: String,
  },
 
  patientName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
  },
  sex: {
    type: String,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  state: {
    type: String,
  },
  attendedDoctor:{
    type: String,
  },
  department:{
    type: String,
  },
  attender:{
    type: String,
  },
  preExistingCondition:{
    type: String,
  },
  reports:{
    type:Array
  },
  reportFile:{
    type:Array
  },
  billName:{
    type:String
  },
  paymentStatus:{
    type:String
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
