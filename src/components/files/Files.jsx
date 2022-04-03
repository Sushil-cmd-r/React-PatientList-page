import File from "./file/File";
import "./files.scss";
const Files = ({ file }) => {
  return (
    <div className="files">
      <div className="wrapper">
        <div className="filesHeader">
          <p>Files/ Documents</p>
          <span>Add Files</span>
        </div>
        <div className="fileContainer">
          {file.map((f, i) => (
            <File f={f} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Files;
