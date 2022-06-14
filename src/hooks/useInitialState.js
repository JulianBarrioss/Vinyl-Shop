import { useState } from "react";

import initialState from "../initalState";

const firstState = {
  cart: [],
  total: 0,
};

const useInitialState = () => {
  const [state, setState] = useState(firstState);
  const [initialProducts, setInitialProducts] = useState(initialState.data);
  const [notificationState, setNotificationState] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sorter, setSorter] = useState('');

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
      total: state.total + payload.attributes.Price,
    });
    setNotificationState(true);
    setTimeout(() => setNotificationState(false), [4000]);
  };

  const removeFromCart = (product, indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((product, index) => index !== indexValue),
      total: state.total - product.attributes.Price,
    });
  };

  let searchedItems = [];

  if (!searchValue.length >= 1) {
    searchedItems = initialProducts;
  } else {
    searchedItems = initialProducts.filter((item) => {
      const title = item.attributes.title.toLowerCase();
      const artist = item.attributes.artist.toLowerCase();
      const gender = item.attributes.gender.toLowerCase();
      const searchText = searchValue.toLowerCase();

      if (title.includes(searchText)) {
        return title.includes(searchText);
      } else if (artist.includes(searchText)) {
        return artist.includes(searchText);
      } else if (gender.includes(searchText)) {
        return gender.includes(searchText);
      }
    });
  }

  let sortedItems = 0;


    if (sorter === "Title(A-Z)") {
      sortedItems = searchedItems.sort((a, b) => {
        if (a.attributes.title > b.attributes.title) {
          return 1;
        }
        if (a.attributes.title < b.attributes.title) {
          return -1;
        }
        return 0;
      });

    } else if (sorter === "Title(Z-A)") {
      sortedItems = searchedItems.sort((a, b) => {
        if (a.attributes.title > b.attributes.title) {
          return -1;
        }
        if (a.attributes.title < b.attributes.title) {
          return 1;
        }
        return 0;
      });
      

    } else if (sorter === "Artist(A-Z)") {
      sortedItems = searchedItems.sort((a, b) => {
        if (a.attributes.artist > b.attributes.artist) {
          return 1;
        }
        if (a.attributes.artist < b.attributes.artist) {
          return -1;
        }
        return 0;
      });
      
      
    } else if (sorter === "Artist(Z-A)") {
      sortedItems = searchedItems.sort((a, b) => {
        if (a.attributes.artist > b.attributes.artist) {
          return -1;
        }
        if (a.attributes.artist < b.attributes.artist) {
          return 1;
        }
        return 0;
      });
      

    } else if (sorter === "Price(High to Low)") {
      sortedItems = searchedItems.sort((a, b) => b.attributes.Price - a.attributes.Price);
      
      
    } else if (sorter === "Price(Low to High)") {
      sortedItems = searchedItems.sort((a, b) => a.attributes.Price - b.attributes.Price);
      

    } else {
      sortedItems = searchedItems;
      
    }

  return {
    state,
    setState,
    searchedItems,
    searchValue,
    addToCart,
    removeFromCart,
    setSearchValue,
    notificationState,
    setNotificationState,

    sortedItems,
    setSorter,
    sorter
  };
};

export { useInitialState };
