import "./patientdetail.scss";

const PatientDetail = ({ patient }) => {
  return (
    <div className="patientdetail">
      <div className="wrapper">
        <ul>
          <li>
            <span className="property">Gender</span>
            <span className="value">{patient?.Gender}</span>
          </li>
          <li>
            <span className="property">Birhtday</span>
            <span className="value">{patient?.Birthday}</span>
          </li>
          <li>
            <span className="property">Phone Number</span>
            <span className="value">{patient["Phone Number"]}</span>
          </li>
          <li>
            <span className="property">Street Address</span>
            <span className="value">{patient["Street Address"]}</span>
          </li>
          {/* <li>
            <span className="property">City</span>
            <span className="value">{patient["City"]}</span>
          </li> */}
          <li>
            <span className="property">ZIP Code</span>
            <span className="value">{patient["ZIP Code"]}</span>
          </li>
          <li>
            <span className="property">Member Status</span>
            <span className="value">{patient["Member Status"]}</span>
          </li>
          <li>
            <span className="property">Registered Date</span>
            <span className="value">{patient["Register Date"]}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatientDetail;
