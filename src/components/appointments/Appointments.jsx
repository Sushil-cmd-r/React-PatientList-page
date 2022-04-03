import Appointment from "./appointment/Appointment";
import "./appointments.scss";

const Appointments = ({ appointment }) => {
  return (
    <div className="appointments">
      <div className="wrapper">
        <div className="top">
          <ul>
            <li className="active">
              <p>Upcoming Appointments</p>
            </li>
            <li>
              <p>Post Appointments</p>
            </li>
            <li>
              <p>Medical Record</p>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="bottomHeader">
            <p>Root Canal Treatment</p>
            <button>Show Previous Treatments</button>
          </div>
          <div className="appointmentContainer">
            <Appointment appointment={appointment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
