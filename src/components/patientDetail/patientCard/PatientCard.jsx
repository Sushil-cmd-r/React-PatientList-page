import "./patientcard.scss";
import { image } from "./image";

const PatientCard = ({ patient }) => {
  return (
    <div className="patientcard">
      <img src={image} alt="" />
      <h3>{patient.name}</h3>
      <p>{patient["e-email"]}</p>
      <div className="meta">
        <span className="posts">
          <h3>{patient.Past}</h3> Past
        </span>
        <div className="divider"></div>
        <span className="upcoming">
          <h3>{patient.Upcoming}</h3>Upcoming
        </span>
      </div>
      <button>Send Message</button>
    </div>
  );
};

export default PatientCard;
