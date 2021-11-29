import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";

import "./blog.css";
const Blog = ({ imgSrc, imgDesc, heading, content, date, author }) => (
  <div className="box">
    <div className="image">
      <img src={imgSrc} alt={imgDesc} />
    </div>
    <div className="content">
      <a href="#blogs" className="link">
        {heading}
      </a>
      <p>{content}</p>
      <div className="icon">
        <a href="#blogs">
          <FontAwesomeIcon icon={faClock} /> {date}
        </a>
        <a href="#blogs">
          <FontAwesomeIcon icon={faUser} /> {author}
        </a>
      </div>
    </div>
  </div>
);

export default Blog;
