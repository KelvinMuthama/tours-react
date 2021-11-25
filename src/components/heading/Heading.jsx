import "./heading.css";

const Heading = ({ heading1, heading2 }) => (
  <div className="heading">
    <span>{heading1}</span>
    <h1>{heading2}</h1>
  </div>
);

export default Heading;
