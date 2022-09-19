import React, { useEffect } from "react";
import { MenuListItem } from "../menu-list-item/menu-list-item";
import "./menu-list.scss";
import { Spinner } from "../spinner/spinner";
import { loadingMenuList } from "../../store/menuList/thunks/loadingMenuList";
import { useDispatch, useSelector } from "react-redux";
import { cartListActions } from "../../store/cartList";

export const MenuList = () => {
  const list = useSelector((state) => state.menuList);
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadingMenuList), []);
  return (
    <ul className="menu__list">
      {list.status === "success" ? (
        list.entities.map((item, index) => (
          <MenuListItem
            key={item.id}
            {...item}
            add={() => dispatch(cartListActions.addCart(item))}
          />
        ))
      ) : (
        <Spinner />
      )}
    </ul>
  );
};
