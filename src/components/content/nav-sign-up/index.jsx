import React, { useState } from "react";

import URL from "../../../config/url";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        nickname,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    setName("");
    setNickname("");
    setPassword("");
    window.location.replace("/sign-in");
  };

  return (
    <div className="sign">
      <form onSubmit={registerUser}>
        <div className="sign-wrapper">
          <div className="sign-wrapper-login">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Имя"
            />
          </div>
          <div className="sign-wrapper-login">
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              type="text"
              placeholder="Логин"
            />
          </div>
          <div className="sign-wrapper-password">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
            />
          </div>
          <button type="submit" id="btn">
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
};
