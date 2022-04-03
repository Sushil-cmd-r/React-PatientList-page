import { AccountBalanceOutlined, PersonOutline } from "@material-ui/icons";
import "./notes.scss";

const Notes = () => {
  return (
    <div className="notes">
      <div className="wrapper">
        <div className="notesHeader">
          <p>Notes</p>
          <span>See all</span>
        </div>
        <div className="notesBody">
          <div className="note">
            <p>- This patient is Lorem ipsum dolor sit amet</p>
            <p>- Lorem ipsum dolor sit amet.</p>
            <p>- has alergic history with Cataflam</p>
          </div>
          <button className="save">save note</button>
        </div>
        <div className="notesFooter">
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="author">
            <span>
              <PersonOutline style={{ color: "blue", marginRight: "5px" }} />
              Drg. Mega Nanade
            </span>

            <span>20 Nov '19</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
