import { EventNoteOutlined } from "@material-ui/icons";
import "./appointment.scss";

const Appointment = () => {
  return (
    <div className="appointment">
      <div className="left">
        <div className="wrapper">
          <div className="date">
            <span>26 Nov '19</span>
            <p className="time">09.00 - 10.00</p>
          </div>
          <div className="treatment">
            <p>Treatment</p>
            <span>Open Access</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="dentist">
            <p>Dentist</p>
            <span>Drg. Adam H.</span>
          </div>
          <div className="nurse">
            <p>Nurse</p>
            <span>Jessicamila</span>
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
