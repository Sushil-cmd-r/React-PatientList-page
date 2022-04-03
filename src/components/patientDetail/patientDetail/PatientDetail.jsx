import "./patientdetail.scss";

const PatientDetail = () => {
  return (
    <div className="patientdetail">
      <div className="wrapper">
        <ul>
          <li>
            <span className="property">Gender</span>
            <span className="value">Female</span>
          </li>
          <li>
            <span className="property">Birhtday</span>
            <span className="value">Feb 24th, 1997</span>
          </li>
          <li>
            <span className="property">Phone Number</span>
            <span className="value">(239) 555-0108</span>
          </li>
          <li>
            <span className="property">Street Address</span>
            <span className="value">JI. Diponegoro No.21</span>
          </li>
          <li>
            <span className="property">City</span>
            <span className="value">Cilacap</span>
          </li>
          <li>
            <span className="property">ZIP Code</span>
            <span className="value">655849</span>
          </li>
          <li>
            <span className="property">Member Status</span>
            <span className="value">Active Member</span>
          </li>
          <li>
            <span className="property">Registered Date</span>
            <span className="value">Feb 24th, 1997</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatientDetail;
