import "./review.css";

const Review = ({ text, imgSrc, imgDesc, name, career }) => (
  <div class="box">
    <p>{text}</p>
    <div class="user">
      <img src={imgSrc} alt={imgDesc} />
      <div class="info">
        <h3>{name}</h3>
        <span>{career}</span>
      </div>
    </div>
  </div>
);

export default Review;
