import React from "react";
import PropTypes from "prop-types";

const AuthorizationScreen = (props) => {
  // eslint-disable-next-line no-console
  // console.log(props);
  // eslint-disable-next-line no-console
  // console.log(`props`);

  // const handleClick = (e) => {
  //   // e.preventDefault();
  //   // eslint-disable-next-line no-console
  //   console.log(`По кнопке кликнули.`);
  // };

  return <section className="login">
    <div className="authorization-pic">
      <img src="./img/authorization.png" alt="logo" width="140"/>
    </div>
    <h2 className="login__title">Необходима авторизация</h2>
    <p className="login__text">Представтесь:</p>

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
      <button className="login__button button" type="submit" onClick={props.onSignInButtonClick}>Войти</button>
    </form>

  </section>;
};

AuthorizationScreen.propTypes = {
  onSignInButtonClick: PropTypes.func.isRequired,
};

export default AuthorizationScreen;
