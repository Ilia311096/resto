import React from "react";
import { CartPage } from "../pages/cart-page";
import { MainPage } from "../pages/main-page";
import { AppHeader } from "../app-header/app-header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./food-bg.jpg";
import { Provider } from "react-redux";
import { store } from "../../store/index";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div
          style={{
            background: `url(${Background}) center center/cover no-repeat`,
          }}
          className="app"
        >
          <AppHeader />
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="cart" element={<CartPage />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
};
