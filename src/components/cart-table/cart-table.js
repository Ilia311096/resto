import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart-table.scss";
import { cartListActions } from "../../store/cartList";
export const CartTable = () => {
  const list = useSelector((state) => state.menuList.entities);
  const items = useSelector((state) => state.cartList.amount);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {Object.keys(items).map((itemKey) => {
          const item = list.find((item) => item.id === +itemKey);
          const { id, title, url, price } = item;
          return (
            <div className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__item-title">
                <button
                  onClick={() => dispatch(cartListActions.plusCart(item))}
                >
                  +
                </button>
                {items[itemKey]}
                <button
                  onClick={() => dispatch(cartListActions.minusCart(item))}
                >
                  --
                </button>
              </div>
              <div
                onClick={() => dispatch(cartListActions.deleteCart(item))}
                className="cart__close"
              >
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
