import { Navbar, Cta } from "../../components";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <Cta hrefSrc="#book-form" />
    </header>
  );
};

export default Header;
