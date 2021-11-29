import { Heading, Blog } from "../../components";
import { blog01, blog02, blog03 } from "./imports";
import "./blogs.css";

const Blogs = () => (
  <section className="blogs" id="blogs">
    <Heading heading1="blogs & posts" heading2="stories untold" />
    <div className="box-container">
      <Blog
        imgSrc={blog01}
        imgDesc="blog1"
        heading="life is an adventure"
        content="The purpose of life, after all, is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience"
        date=" 21st May, 2021"
        author=""
      />
      <Blog
        imgSrc={blog02}
        imgDesc="blog2"
        heading="the wonders of nature"
        content="These 7 natural wonders of the world include the Northern Lights, the Grand Canyon, Paricutin, Mount Everest, Harbor of Rio de Janeiro, Victoria Falls, and the Great Barrier Reef"
        date=" 18th Aug, 2021"
        author=""
      />
      <Blog
        imgSrc={blog03}
        imgDesc="blog3"
        heading="an outdoor adventure"
        content="Outdoor recreation or outdoor activity refers to recreation engaged in out of doors, most commonly in natural settings."
        date=" 1st Dec, 2021"
        author=""
      />
    </div>
  </section>
);

export default Blogs;
