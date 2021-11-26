import { Video } from "../../components";
import { Cta } from "../../components";
import "./about.css";

const About = () => (
  <section className="about" id="about">
    <Video />
    <div className="content">
      <span>why choose us?</span>
      <h3>Nature's Majesty Awaits You</h3>
      <p>
        Spending time in nature can improve memory, lower stress hormones, and
        reduce feelings of depression or anxiety, among other perks. Being in
        nature can help clear your head and bring you into the present moment,
        and is a great way to de-stress and relax.
      </p>
      <Cta hrefSrc="#book-form" text="read more" />
    </div>
  </section>
);

export default About;
