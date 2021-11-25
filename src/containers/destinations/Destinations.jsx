import { Destination, Heading } from "../../components";
import {
  des01,
  des02,
  des03,
  des04,
  des05,
  des06,
  des07,
  des08,
} from "./imports";
import "./destinations.css";

const Destinations = () => (
  <section className="destination" id="destination">
    <Heading heading1="our destination" heading2="make your destination" />
    <div className="box-container">
      <Destination
        heading="Tours & Travel"
        content="While larger cities may boast impressive skylines, there is nothing
            quite as beautiful as nature."
        imgSrc={des01}
      />
      <Destination
        heading="Tours & Travel"
        content="While larger cities may boast impressive skylines, there is nothing
            quite as beautiful as nature."
        imgSrc={des02}
      />
      <Destination
        heading="Tours & Travel"
        content="While larger cities may boast impressive skylines, there is nothing
            quite as beautiful as nature."
        imgSrc={des03}
      />
      <Destination
        heading="Tours & Travel"
        content="While larger cities may boast impressive skylines, there is nothing
            quite as beautiful as nature."
        imgSrc={des04}
      />
      <Destination
        heading="Tours & Travel"
        content="While larger cities may boast impressive skylines, there is nothing
            quite as beautiful as nature."
        imgSrc={des05}
      />
      <Destination
        heading="Tours & Travel"
        content="While larger cities may boast impressive skylines, there is nothing
            quite as beautiful as nature."
        imgSrc={des06}
      />
      <Destination
        heading="Tours & Travel"
        content="While larger cities may boast impressive skylines, there is nothing
            quite as beautiful as nature."
        imgSrc={des07}
      />
      <Destination
        heading="Tours & Travel"
        content="While larger cities may boast impressive skylines, there is nothing
            quite as beautiful as nature."
        imgSrc={des08}
      />
    </div>
  </section>
);

export default Destinations;
