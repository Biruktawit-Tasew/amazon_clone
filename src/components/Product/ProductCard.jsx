import { Link } from "react-router";
import CurrencyFormat from "../currencyFormat/currencyFormat";
import styles from "./product.module.css";
import { Rating } from "@mui/material";

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;
  return (
    <div className={styles.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={styles.rating}>
          <Rating value={rating?.rate ?? 0} precision={0.1} />
        <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
