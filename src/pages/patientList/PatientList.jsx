import "./patientlist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import { ArrowForwardIos, Edit } from "@material-ui/icons";
import PatientDetails from "../../components/patientDetail/PatientDetails";
import Appointments from "../../components/appointments/Appointments";
import Notes from "../../components/notes/Notes";
import Files from "../../components/files/Files";

const PatientList = ({ patient, appointment, file, docter }) => {
  return (
    <div className="patientlist">
      <Sidebar docter={docter} />
      <div className="body">
        <Header patient={patient} />
        <div className="current">
          <div className="left">
            <span className="currentLink">Patient List</span>
            <ArrowForwardIos />
            <span className="patientName">{patient.name}</span>
          </div>
          <div className="right">
            <Edit />
          </div>
        </div>
        <div className="main">
          <div className="mainLeft">
            <div className="mainWrapper">
              <PatientDetails patient={patient} />
              <Appointments appointment={appointment} />
            </div>
          </div>
          <div className="mainRight">
            <div className="sideWrapper">
              <Notes />
              <Files file={file} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
