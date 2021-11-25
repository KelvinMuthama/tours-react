import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./menu.css";

const Menu = () => {
  return (
    <i id="menu-btn">
      <FontAwesomeIcon icon={faBars} />
    </i>
  );
};

export default Menu;
