import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css";
import {useStateValue} from "./StateProvider";
function Header() {
const [{basket}] = useStateValue();

  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon Logo'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchbar' />
        <SearchIcon className='header__searchicon'></SearchIcon>
      </div>


      <div className='header__nav'>
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className="header__optionlineone" >Hello</span>
            <span className="header__optionlinetwo">
            Sign-in
            </span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className="header__optionlineone">Returns</span>
            <span className="header__optionlinetwo">
            & Orders
            </span>
          </div>
        </Link>

        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className="header__optionlineone">Your</span>
            <span className="header__optionlinetwo">
            Prime
            </span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
          <div className='header__optionbasket'>
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className="header__optionlinetwo header__basketcount">
            {basket?.length}
            </span>
          </div>
        </Link>
        
      </div>
    </nav>
  );
}

export default Header;
