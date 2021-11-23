import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./menu.css";

const Menu = () => {
  return (
    <div id="menu-btn">
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default Menu;
