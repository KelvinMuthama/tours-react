import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./service.css";

const Service = ({ heading, text, icon }) => (
  <div className="box">
    <i>
      <FontAwesomeIcon icon={icon} />
    </i>
    <h3>{heading}</h3>
    <p>{text}</p>
  </div>
);

export default Service;
