import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {questions, settings} from "./mocks/questions.js";

const init = (questionS, settingS) => {

  ReactDOM.render(
      <App
        errorCount={settingS.errorCount}
        gameTime={settingS.gameTime}
        questions={questionS}
      />,
      document.querySelector(`.main`)
  );
};

init(questions, settings);
