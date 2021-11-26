import { Heading } from "../../components";
import { Service } from "../../components";
import {
  faGlobe,
  faHiking,
  faWallet,
  faHotel,
  faUtensils,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./services.css";

const Services = () => (
  <section className="services" id="services">
    <Heading heading1="our services" heading2="countless experiences" />

    <div className="box-container">
      <Service
        heading="worldwide"
        text="We are always proud of being an experienced tours and travel services provider in the international market."
        icon={faGlobe}
      />

      <Service
        heading="adventures"
        text="The body fuels the mind surrounded by the dynamic life systems that comprise the miracle of life."
        icon={faHiking}
      />

      <Service
        heading="food and drinks"
        text="Before you head out on your hiking trip, start your day with a filling and healthy meal provided for you"
        icon={faUtensils}
      />

      <Service
        heading="affordable hotels"
        text="Choose From a Wide Range of hotels. We Have Over 40 Payment Ways for Locking the Lowest Room Rates."
        icon={faHotel}
      />

      <Service
        heading="affordable price"
        text="all our travel destinations are priced at affordable prices.We are programmed to believe that price and quality are interlinked"
        icon={faWallet}
      />

      <Service
        heading="24/7 support"
        text="Whether for in-person assistance, technical support, or remote support, travel is here to ensure our clients are fulfilled in their pursuit for adventure"
        icon={faHeadset}
      />
    </div>
  </section>
);

export default Services;
