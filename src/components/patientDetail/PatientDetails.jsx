import "./patientdetails.scss";
import PatientCard from "./patientCard/PatientCard";
import PatientDetail from "./patientDetail/PatientDetail";

const PatientDetails = ({ patient }) => {
  return (
    <div className="patientdetails">
      <PatientCard patient={patient} />
      <PatientDetail patient={patient} />
    </div>
  );
};

export default PatientDetails;
