import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
// import questions from "./mocks/questions.js";
// import settings from "./mocks/settings.js";
import {reducer, ActionCreator} from "./reducer.js";
import withScreenSwitch from "./hocs/with-screen-switch/with-screen-switch.js";

const gameSettings = {
  gameTime: 5,
  maxMistakes: 3,
};

const AppWrapped = withScreenSwitch(App);

const init = () => {
  const {maxMistakes, gameTime} = gameSettings;
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch(ActionCreator.loadQuestions());

  ReactDOM.render(<Provider store={store}>
    <AppWrapped
      gameTime={gameTime}
      maxMistakes={maxMistakes}
    />
  </Provider>,
  document.querySelector(`.main`));
};

init();
