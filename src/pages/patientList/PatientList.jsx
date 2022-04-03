import "./patientlist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import { ArrowForwardIos, Edit } from "@material-ui/icons";
import PatientDetails from "../../components/patientDetail/PatientDetails";
import Appointments from "../../components/appointments/Appointments";

const PatientList = () => {
  return (
    <div className="patientlist">
      <Sidebar />
      <div className="body">
        <Header />
        <div className="current">
          <div className="left">
            <span className="currentLink">Patient List</span>
            <ArrowForwardIos />
            <span className="patientName">Diane Cooper</span>
          </div>
          <div className="right">
            <Edit />
          </div>
        </div>
        <div className="main">
          <div className="mainLeft">
            <div className="mainWrapper">
              <PatientDetails />
              <Appointments />
            </div>
          </div>
          <div className="mainRight">{/* Files */}</div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
