import axios from "axios";

const url = "https://619f39821ac52a0017ba467e.mockapi.io";

const getPatient = () => axios.get(`${url}/patientDetails`);
const getAppointments = () => axios.get(`${url}/appointment_details`);
const getFiles = () => axios.get(`${url}/Files`);
const getDentist = () => axios.get(`${url}/DoctorDetails`);

export { getPatient, getAppointments, getFiles, getDentist };
