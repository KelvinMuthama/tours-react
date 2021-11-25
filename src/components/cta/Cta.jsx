import "./cta.css";

const Cta = ({ hrefSrc, text }) => (
  <a href={hrefSrc} className="btn">
    {text}
  </a>
);

export default Cta;
