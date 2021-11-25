import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./destination.css";

const Destination = ({ heading, content, imgSrc }) => (
  <div className="box">
    <div className="image">
      <img src={imgSrc} alt="tour" />
    </div>
    <div className="content">
      <h3>{heading}</h3>
      <p>{content}</p>

      <a href="#destination">
        read more
        <i>
          <FontAwesomeIcon icon={faAngleRight} />
        </i>
      </a>
    </div>
  </div>
);

export default Destination;
