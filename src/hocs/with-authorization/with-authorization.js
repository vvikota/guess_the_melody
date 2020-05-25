import React from "react";
import PropTypes from "prop-types";

const withAuthorization = (Component) => {
  class WithAuthorization extends React.PureComponent {
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
      // eslint-disable-next-line no-console
      console.log(this.state);
    }

    render() {
      return <Component
        {...this.props}
        onChange={this._onChange}
        logIn={this._logIn}
        email={this.state.email}
        password={this.state.password}
      />;
    }
  }

  WithAuthorization.propTypes = {
    onSignInButtonClick: PropTypes.func.isRequired,
  };

  return WithAuthorization;
};

export default withAuthorization;
