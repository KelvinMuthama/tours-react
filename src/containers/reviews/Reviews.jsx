import { Review } from "../../components";
import { pic01, pic02, pic03, pic04 } from "./imports";
import "./reviews.css";

const Reviews = () => (
  <section className="review">
    <div className="content">
      <span>testimonials</span>
      <h3>what our clients say</h3>
      <p>
        We make every proper means to make sure our clients have the best
        experience - an adventure of a lifetime.
      </p>
    </div>
    <div className="box-container">
      <Review
        text="It was such a thrilling experience. Can't wait for summer"
        imgSrc={pic01}
        imgDesc="man"
        name="Johnson"
        career="mountain climer"
      />
      <Review
        text="What an adventure it was, away from the office and noise of the city"
        imgSrc={pic02}
        imgDesc="woman"
        name="jane"
        career="accountant"
      />
      <Review
        text="I loved it. Words alone cannot describe my experience, the thrill, rush and fun."
        imgSrc={pic03}
        imgDesc="Man"
        name="Martin"
        career="business man"
      />
      <Review
        text="My advice to everyone, Book now,My camera's memory is full of picturesque images. Just amazing and unforgetable"
        imgSrc={pic04}
        imgDesc="woman"
        name="Maggie"
        career="fashion designer"
      />
    </div>
  </section>
);

export default Reviews;
