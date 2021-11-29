import { Heading, Gallery } from "../../components";
import {
  gal01,
  gal02,
  gal03,
  gal04,
  gal05,
  gal06,
  gal07,
  gal08,
  gal09,
} from "./imports";
import "./galleries.css";

const Galleries = () => (
  <section className="gallery" id="gallery">
    <Heading heading1="our gallery" heading2="we record memories" />
    <div className="box-container">
      <Gallery destination="alaska" imgSrc={gal01} imgDesc="alaska" />
      <Gallery destination="maldives" imgSrc={gal02} imgDesc="maldives" />
      <Gallery destination="greenland" imgSrc={gal03} imgDesc="greenland" />
      <Gallery destination="thailand" imgSrc={gal04} imgDesc="thailand" />
      <Gallery destination="canada" imgSrc={gal05} imgDesc="canada" />
      <Gallery destination="alaska" imgSrc={gal06} imgDesc="alaska" />
      <Gallery destination="italy" imgSrc={gal07} imgDesc="italy" />
      <Gallery destination="france" imgSrc={gal08} imgDesc="france" />
      <Gallery destination="morocco" imgSrc={gal09} imgDesc="morocco" />
    </div>
  </section>
);

export default Galleries;
