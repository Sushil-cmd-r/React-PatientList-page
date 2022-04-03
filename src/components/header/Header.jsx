import "./header.scss";
import { Add, Notifications, PersonOutline, Search } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <PersonOutline className="icon" />
        <span className="headerName">Diane Cooper</span>
      </div>
      <div className="headerRight">
        <div className="search">
          <Search className="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="headerIcons">
          <div className="addIcon">
            <Add />
          </div>
          <div className="notifications">
            <Notifications className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
