import { Cta } from "..";
import "./banner.css";

const Banner = () => (
  <div className="banner">
    <div className="content">
      <span>start your adventure</span>
      <h3>let's explore this world</h3>
      <p>
        The Earth offers spectacular natural wonders that only a small
        percentage of people will ever see in their lifetime. A global
        popularity poll announced seven provisional winners that outrank other
        splendid sights
      </p>
      <Cta text="book now" hrefSrc="#book-form" />
    </div>
  </div>
);

export default Banner;
