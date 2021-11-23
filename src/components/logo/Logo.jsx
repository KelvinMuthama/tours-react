import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./logo.css";

const Logo = () => {
  return (
    <a href="#home" className="logo">
      <i>
        <FontAwesomeIcon icon={faPaperPlane} />
      </i>
      travel
    </a>
  );
};

export default Logo;
