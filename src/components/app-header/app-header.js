import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import "./app-header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const AppHeader = () => {
  const total = useSelector((state) => state.cartList.total);
  return (
    <header className="header">
      <Link className="header__link" to="main">
        Menu
      </Link>
      <Link className="header__link" to="cart">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {total} $
      </Link>
    </header>
  );
};
