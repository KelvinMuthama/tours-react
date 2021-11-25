import { Cta } from "..";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span>get ready for</span>
        <h3>an exciting adventure</h3>
        <p>
          Whether you're looking for a relaxing excursion, like a stroll around
          the lake, or an invigorating adventure, like backcountry camping, look
          no further.
        </p>
        <Cta hrefSrc="#book-form" />
      </div>
    </section>
  );
};

export default Home;
