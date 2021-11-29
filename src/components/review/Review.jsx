import "./review.css";

const Review = ({ text, imgSrc, imgDesc, name, career }) => (
  <div className="box">
    <p>{text}</p>
    <div className="user">
      <img src={imgSrc} alt={imgDesc} />
      <div className="info">
        <h3>{name}</h3>
        <span>{career}</span>
      </div>
    </div>
  </div>
);

export default Review;
