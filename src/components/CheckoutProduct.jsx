import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { AppContext } from "../context/AppContext";
import "../styles/components/CheckoutProduct.css";

const CheckoutProduct = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);
  return (
    <div className="checkout__product">
      <figure className="checkout__product-img-container">
        <img
          src={product.attributes.image}
          alt={product.attributes.title}
          className="checkout__product-img"
        />
      </figure>
      <div className="checkout__product-info-container">
        <span>
          <p>{`${product.attributes.title} - ${product.attributes.artist}`}</p>
          <p>{`Price: $${product.attributes.Price}`}</p>
        </span>
        <DeleteIcon
          sx={{ fontSize: 40 }}
          className="deleteIcon"
          onClick={() => removeFromCart(product, indexValue)}
        />
      </div>
    </div>
  );
};

export { CheckoutProduct };
