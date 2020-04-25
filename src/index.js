import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";
import settings from "./mocks/settings.js";
import {reducer} from "./reducer.js";

const init = (gameQuestions, gameSettings) => {
  const store = createStore(reducer);

  ReactDOM.render(<Provider store={store}>
    <App
      errorCount={gameSettings.errorCount}
      gameTime={gameSettings.gameTime}
      questions={gameQuestions}
    />
  </Provider>,
  document.querySelector(`.main`));
};

init(questions, settings);
