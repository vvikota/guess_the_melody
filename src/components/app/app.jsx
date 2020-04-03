import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcom-screen/welcom-screen.jsx";

const App = (props) => {
  const {errorCount, gameTime} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

export default App;
