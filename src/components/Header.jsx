import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AlbumIcon from '@mui/icons-material/Album';
import SearchIcon from '@mui/icons-material/Search';

import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className="header__logo">
            <a href='/'><AlbumIcon className='header__logoImage' fontSize='large' /> </a>
            <a href='/'><h2 className='header__logoTitle' href='/'>VinylStore</h2></a>
        </div>
        <div className="header__search">
            <input type="text" className='header__searchInput' />
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className="header__nav">
            <div className="nav__item">
                <span className='nav__itemLineOne'>Hello Guest</span>
                <span className="nav__itemLineTwo">Sign in</span>
            </div>
            <div className="nav__item">
                <span className='nav__itemLineOne'>Your</span>
                <span className="nav__itemLineTwo">Shop</span>
            </div>
            <div className="nav__itemBag">
                <ShoppingBagIcon />
                <span className="nav__itemLineTwo nav__basketCount">0</span>
            </div>
        </div>
    </header>
  );
};


export { Header };