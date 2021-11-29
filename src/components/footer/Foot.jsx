import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPaperPlane,
  faMap,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

import "./foot.css";

const Foot = () => (
  <>
    <div className="box">
      <a href="#footer" className="logo">
        <i>
          <FontAwesomeIcon icon={faPaperPlane} />
        </i>
        travel
      </a>
      <p>
        Explore the curiosities of planet Earth and marvel at the beauty of the
        natural world in a new way.
      </p>
      <div className="share">
        <a href="#footer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#footer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#footer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#footer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>

    <div className="box">
      <h3>quick links</h3>
      <a href="#home" className="links">
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
        home
      </a>
      <a href="#about" className="links">
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
        about
      </a>
      <a href="#destination" className="links">
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
        destination
      </a>
      <a href="#services" className="links">
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
        services
      </a>
      <a href="#gallery" className="links">
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
        gallery
      </a>
      <a href="#blogs" className="links">
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
        blogs
      </a>
    </div>

    <div className="box">
      <h3>contact info</h3>
      <p>
        <i>
          <FontAwesomeIcon icon={faMap} />
        </i>
        nairobi, kenya
      </p>
      <p>
        <i>
          <FontAwesomeIcon icon={faPhone} />
        </i>
        +254790553379
      </p>
      <p>
        <i>
          <FontAwesomeIcon icon={faEnvelope} />
        </i>
        kelvinkamau387@gmail.com
      </p>
      <p>
        <i>
          <FontAwesomeIcon icon={faClock} />
        </i>
        7:00am - 10:00pm
      </p>
    </div>

    <div className="box">
      <h3>newsletter</h3>
      <p>subscribe for latest updates</p>
      <form action="">
        <input
          type="email"
          name=""
          placeholder="enter your email"
          className="email"
          id=""
        />

        <input type="submit" value="subscribe" className="btn" />
      </form>
    </div>
  </>
);

export default Foot;
