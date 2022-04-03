import "./patientcard.scss";
import { image } from "./image";

const PatientCard = () => {
  return (
    <div className="patientcard">
      <img src={image} alt="" />
      <h3>Diane Cooper</h3>
      <p>diane@email.com</p>
      <div className="meta">
        <span className="posts">
          <h3>15</h3> Post
        </span>
        <div className="divider"></div>
        <span className="upcoming">
          <h3>2</h3>Upcoming
        </span>
      </div>
      <button>Send Message</button>
    </div>
  );
};

export default PatientCard;
