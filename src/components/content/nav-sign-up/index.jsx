import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="sign">
      <div className="sign-wrapper">
        <div className="sign-wrapper-login">
          <input type="text" placeholder="Имя" required />
        </div>
        <div className="sign-wrapper-login">
          <input type="text" placeholder="Логин" required />
        </div>
        <div className="sign-wrapper-password">
          <input type="password" placeholder="Пароль" required />
        </div>
        <button id="btn">Регистрация</button>
      </div>
    </div>
  );
};
