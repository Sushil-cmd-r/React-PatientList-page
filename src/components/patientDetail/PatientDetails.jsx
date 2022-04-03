import "./patientdetails.scss";
import PatientCard from "./patientCard/PatientCard";
import PatientDetail from "./patientDetail/PatientDetail";

const PatientDetails = () => {
  return (
    <div className="patientdetails">
      <PatientCard />
      <PatientDetail />
    </div>
  );
};

export default PatientDetails;
