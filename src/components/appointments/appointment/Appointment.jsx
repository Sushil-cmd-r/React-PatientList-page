import { EventNoteOutlined } from "@material-ui/icons";
import "./appointment.scss";

const Appointment = ({ appointment }) => {
  return (
    <div className="appointment">
      <div className="left">
        <div className="wrapper">
          <div className="date">
            <span>{appointment["Upcoming Appointments"]?.Date}</span>
            <p className="time">{appointment["Upcoming Appointments"]?.Time}</p>
          </div>
          <div className="treatment">
            <p>Treatment</p>
            <span>{appointment["Upcoming Appointments"]?.Treatment}</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="dentist">
            <p>Dentist</p>
            <span>{appointment["Upcoming Appointments"]?.Dentist}</span>
          </div>
          <div className="nurse">
            <p>Nurse</p>
            <span>{appointment["Upcoming Appointments"]?.Nurse}</span>
          </div>
          <div className="icon">
            <EventNoteOutlined />
            <span>Note</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
