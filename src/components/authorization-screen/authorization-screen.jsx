import React from "react";
import PropTypes from "prop-types";

const AuthorizationScreen = (props) => {
  const {onChange, logIn} = props;
  // eslint-disable-next-line no-console
  // console.log(props.logIn);

  return <section className="login">
    <div className="authorization-pic">
      <img src="./img/authorization.png" alt="logo" width="140"/>
    </div>
    <h2 className="login__title">Необходима авторизация</h2>
    <p className="login__text">Представтесь:</p>

    <form className="login__form" action="">
      <p className="login__field">
        <label className="login__label" htmlFor="email">Email</label>
        <input
          className="login__input"
          type="text"
          name="email"
          id="email"
          onChange={onChange}
        />
      </p>
      <p className="login__field">
        <label className="login__label" htmlFor="password">Пароль</label>
        <input
          className="login__input"
          type="text"
          name="password"
          id="password"
          onChange={onChange}
        />
        <span className="login__error">Неверный пароль</span>
      </p>
      <button className="login__button button" type="submit" onClick={logIn}>Войти</button>
    </form>

  </section>;
};

AuthorizationScreen.propTypes = {
  onChange: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

export default AuthorizationScreen;
