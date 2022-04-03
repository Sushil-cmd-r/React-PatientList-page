import "./file.scss";

const File = ({ f }) => {
  return (
    <div className="file">
      <div className="name">
        {/* Icon */}
        {f}
      </div>
      <span className="size">123kb</span>
    </div>
  );
};

export default File;
