import "./book.css";

const Book = () => (
  <section className="book-form" id="book-form">
    <form action="">
      <div className="inputBox">
        <span>where to?</span>
        <input type="text" placeholder="place name" />
      </div>
      <div className="inputBox">
        <span>when?</span>
        <input type="date" />
      </div>
      <div className="inputBox">
        <span>how many?</span>
        <input type="number" placeholder="number of travelers" />
      </div>
      <input
        data-aos="zoom-in"
        data-aos-delay="600"
        type="submit"
        value="find now"
        className="btn"
      />
    </form>
  </section>
);

export default Book;
