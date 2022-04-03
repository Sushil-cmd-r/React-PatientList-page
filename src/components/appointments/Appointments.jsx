import { useState } from "react";
import Appointment from "./appointment/Appointment";
import "./appointments.scss";

const Appointments = ({ appointment = {} }) => {
  const [active, setActive] = useState(1);
  const upcoming = () => {
    setActive(1);
  };
  const set = () => {
    setActive(2);
  };
  const med = () => setActive(3);

  return (
    <div className="appointments">
      <div className="wrapper">
        <div className="top">
          <ul>
            <li className={active == 1 ? "active" : ""} onClick={upcoming}>
              <p>Upcoming Appointments</p>
            </li>
            <li className={active == 2 ? "active" : ""} onClick={set}>
              <p>Post Appointments</p>
            </li>
            <li className={active == 3 ? "active" : ""} onClick={med}>
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
