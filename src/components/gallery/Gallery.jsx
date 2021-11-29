import "./gallery.css";

const Gallery = ({ destination, imgSrc, imgDesc }) => (
  <div className="box">
    <img src={imgSrc} alt={imgDesc} />
    <span>travel spot</span>
    <h3>{destination}</h3>
  </div>
);

export default Gallery;
