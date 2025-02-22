import { Link } from "react-router";
import CurrencyFormat from "../currencyFormat/currencyFormat";
import styles from "./product.module.css";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action";

const ProductCard = ({ product, flex, renderDesc ,renderAdd }) => {
  const { image, title, id, rating, price , description } = product;
  const [state,dispatch] = useContext(DataContext)
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  }
  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={styles.rating}>
          <Rating value={rating?.rate ?? 0} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={styles.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
