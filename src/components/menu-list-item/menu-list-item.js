import React from "react";
import "./menu-list-item.scss";

export const MenuListItem = ({ title, url, category, price, add } = {}) => {
  return (
    <>
      <li className="menu__item">
        <div className="menu__title">{title}</div>
        <img className="menu__img" src={url} alt={title}></img>
        <div className="menu__category">
          Category: <span>{category}</span>
        </div>
        <div className="menu__price">
          Price: <span>{price}$</span>
        </div>
        <button onClick={add} className="menu__btn">
          Add to cart
        </button>
      </li>
    </>
  );
};
