import React from "react";

const AuthorizationScreen = () => {
  return <section className="login">
    <div className="login__logo">
      <img src="#" alt="logo"/>
    </div>
    <h2 className="login__title">Необходима авторизация</h2>
    <p className="login__text">Представтесь</p>

    <form className="login__form" action="">
      <p className="login__field">
        <label className="login__label" htmlFor="name">Логин</label>
        <input className="login__input" type="text" name="name" id="name" />
      </p>
      <p className="login__field">
        <label className="login__label" htmlFor="password">Пароль</label>
        <input className="login__input" type="text" name="password" id="password" />
        <span className="login__error">Неверный пароль</span>
      </p>
      <button className="login__button button" type="submit">Войти</button>
    </form>

  </section>;
};

export default AuthorizationScreen;
