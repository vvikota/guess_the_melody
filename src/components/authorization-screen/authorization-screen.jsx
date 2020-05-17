import React from "react";
import PropTypes from "prop-types";

class AuthorizationScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: `test@test.ru`,
      password: `pass`,
    };

    this._logIn = this._logIn.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _logIn(e) {
    e.preventDefault();
    this.props.onSignInButtonClick({
      email: this.state.email,
      password: this.state.password,
    });
  }

  _onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });

  }

  render() {
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
            onChange={this._onChange}
          />
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input
            className="login__input"
            type="text"
            name="password"
            id="password"
            onChange={this._onChange}
          />
          <span className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit" onClick={this._logIn}>Войти</button>
      </form>

    </section>;
  }
}

AuthorizationScreen.propTypes = {
  onSignInButtonClick: PropTypes.func.isRequired,
};

export default AuthorizationScreen;
