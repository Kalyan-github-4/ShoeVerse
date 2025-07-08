import { BsFillBagHeartFill } from "react-icons/bs";

const Cards = ({ img, title, star, reviews, prevPrice, newPrice }) => {

  return (
    <section className="card">
      <img src={img} alt={title} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        
        <section className="card-reviews">
          <div className="rating-stars">
            {star}
          </div>
          <span className="total-reviews">{reviews}</span>
        </section>

        <section className="card-price">
          <div className="price">
            {prevPrice && <del>${prevPrice}</del>} ${newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cards;