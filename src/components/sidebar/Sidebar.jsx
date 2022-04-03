import "./sidebar.scss";
import {
  LocalHospital,
  Speed,
  CalendarToday,
  AccountCircleOutlined,
  MailOutline,
  AttachMoney,
  SettingsOutlined,
  Help,
} from "@material-ui/icons";
import { image } from "../patientDetail/patientCard/image";

const Sidebar = ({ docter }) => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="side-item">
          <LocalHospital className="icon" />
          <span className="side-text">LOGO</span>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>
            <div className="li-item">
              <Speed className="icon" />
              <span className="side-text">Overview</span>
            </div>
          </li>
          <li>
            <div className="li-item">
              <CalendarToday className="icon" />
              <span className="side-text">Calendar</span>
            </div>
          </li>
          <li>
            <div className="li-item active">
              <AccountCircleOutlined className="icon" />
              <span className="side-text">Patient List</span>
            </div>
          </li>
          <li>
            <div className="li-item">
              <MailOutline className="icon" />
              <span className="side-text">Messages</span>
            </div>
          </li>
          <li>
            <div className="li-item">
              <AttachMoney className="icon" />
              <span className="side-text">Payment Info</span>
            </div>
          </li>
          <li>
            <div className="li-item">
              <SettingsOutlined className="icon" />
              <span className="side-text">Settings</span>
            </div>
          </li>
          <li>
            <div className="li-item">
              <Help className="icon" />
              <span className="side-text">Help</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="side-item">
          <img src={image} alt="" />
          <span className="side-text">
            <h3>{docter?.name}</h3>
            <p>{docter?.specification}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
