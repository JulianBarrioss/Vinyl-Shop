import React, { useContext} from "react";

import { Product } from "../components/Product";
import { AppContext } from "../context/AppContext";

import "../styles/containers/Products.css";

const Products = () => {
  const { searchedItems, notificationState, setNotificationState, } = useContext(AppContext);


  return (
    <>
      <div className="products">
        {searchedItems.length === 0 ? (
          <h2>Sorry! It seems like we don't have that one :(</h2>
        ) : (
          searchedItems.map((product) => (
            <Product
              product={product}
              key={product.id}
              setNotificationState={setNotificationState}
              notificationState={notificationState}
            />
          ))
        )}
      </div>
      <div
        className={notificationState ? "notification-display" : "notification"}
      >
        Added to cart
      </div>
    </>
  );
};

export { Products };
