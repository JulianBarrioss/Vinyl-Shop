import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { AppContext } from "../context/AppContext";
import { Modal } from "./Modal";
import "../styles/components/Product.css";

const Product = ({ product, setNotificationState, notificationState }) => {
  const { addToCart } = useContext(AppContext);
  const [modalState, setModalState] = useState(false);

  const notificationHandle = (product) => {
    addToCart(product);
    setNotificationState(true);
    setTimeout(() => setNotificationState(false), [2000]);
  };

  return (
    <div className="product">
      <figure
        className="product-figure"
        onClick={() => setModalState(!modalState)}
      >
        <img
          src={product.attributes.image}
          alt={product.attributes.title}
          className="product__image"
        />
      </figure>
      <div className="product-div" onClick={() => setModalState(!modalState)}>
        <p className="product-div-title"> {product.attributes.title}</p>
        <p>{product.attributes.artist}</p>
        <p>${product.attributes.Price}</p>
      </div>

      <AddIcon
        className="product-addIcon"
        fontSize="large"
        onClick={() => {
          notificationHandle(product);
        }}
      />
      <Modal
        product={product}
        modalState={modalState}
        setModalState={setModalState}
        notificationState={notificationState}
        setNotificationState={setNotificationState}
      />
    </div>
  );
};

export { Product };
