import { menuListActions } from "../index";

export const loadingMenuList = (dispatch, getState) => {
  if (getState().menuList.entities.length > 0) {
    return;
  }
  dispatch(menuListActions.startLoading());
  fetch("http://localhost:3000/menu")
    .then((list) => list.json())
    .then((list) => dispatch(menuListActions.successLoading(list)))
    .catch(() => dispatch(menuListActions.failLoading()));
};
