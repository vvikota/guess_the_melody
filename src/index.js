import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";

const gameSettings = {
  gameTime: 5,
  errorCount: 3,
};

const init = (gameQuestions) => {

  ReactDOM.render(<App
    errorCount={gameSettings.errorCount}
    gameTime={gameSettings.gameTime}
    questions={gameQuestions}
  />,
  document.querySelector(`.main`)
  );
};

init(questions);
