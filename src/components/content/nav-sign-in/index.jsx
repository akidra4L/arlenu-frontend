import React, { useState } from "react";
import URL from "../../../config/url";
import { useContext } from "react";
import { AuthContext, TokenContext } from "../../../context/AuthContext";
import { createTokenCookies } from "../../../utils/tokenCookies";
import jwt_decode from "jwt-decode";

export const SignIn = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { token, setToken } = useContext(TokenContext);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname,
        password,
      }),
    });
    const data = await response.json();
    // console.log(data);
    // console.log(response);
    if (response.status === 200) {
      setNickname("");
      setPassword("");
      localStorage.setItem("token", JSON.stringify(data));
      createTokenCookies(JSON.stringify(data));
      setIsAuth(true);
      setToken(jwt_decode(JSON.stringify(data)));
      console.log("jwt_decode: ", jwt_decode(JSON.stringify(data)));
      window.location.href = "/";
    } else if (response.status === 400) {
      setNickname("");
      setPassword("");
      alert("User is not exists.");
    }
  };

  return (
    <div className="sign">
      <form onSubmit={loginUser}>
        <div className="sign-wrapper">
          <div className="sign-wrapper-login">
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              type="text"
              placeholder="Логин"
              required
            />
          </div>
          <div className="sign-wrapper-password">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
              required
            />
          </div>
          <button type="submit" id="btn">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};
