import React, { useContext, useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AlbumIcon from "@mui/icons-material/Album";
import SearchIcon from "@mui/icons-material/Search";

import { AppContext } from "../context/AppContext";

import "../styles/components/Header.css";

const Header = () => {
  const { state, setSearchValue } = useContext(AppContext);
  const [userHeaderName, setUserHeaderName] = useState("Hello, Guest");

  const auth = getAuth();

  const logOut = () => {
    document.location.reload(true);
    signOut(auth);
  };

  useEffect(() => {
    if (auth.currentUser) {
      setUserHeaderName(auth.currentUser.displayName);
    }
  }, [auth.currentUser]);

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <div className="header__logo">
          <AlbumIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">VinylShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input
          placeholder="search by artists, titles or genres"
          type="text"
          className="header__searchInput"
          onChange={onSearch}
        />
        <div className="header__searchIcon-container">
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
      <div className="header__nav">
        <Link to={auth.currentUser ? "/" : "/checkout/login"}>
          <div className="nav__item">
            <span className="nav__itemLineOne">{userHeaderName}</span>
            {!auth.currentUser && (
              <span className="nav__itemLineTwo">Sign in</span>
            )}
            {auth.currentUser && (
              <span className="nav__itemLineTwo" onClick={logOut}>
                Log Out
              </span>
            )}
          </div>
        </Link>
        <Link to="/checkout" className="nav__itemBagLink">
          <div className="nav__itemBag">
            <ShoppingBagIcon />
            <span className="nav__itemLineTwo nav__basketCount">
              {state.cart.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export { Header };
