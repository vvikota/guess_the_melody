import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {BrowserRouter} from "react-router-dom";

import App from "./components/app/app.jsx";
import {createAPI} from "./api.js";
import reducer from "./reducer/index.js";
import {Operation} from "./reducer/data/data.js";
import withScreenSwitch from "./hocs/with-screen-switch/with-screen-switch.js";

const gameSettings = {
  gameTime: 5,
  maxMistakes: 3,
};

const AppWrapped = withScreenSwitch(App);

const init = () => {
  const {maxMistakes, gameTime} = gameSettings;
  const api = createAPI();

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(Operation.loadQuestions());

  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <AppWrapped
        gameTime={gameTime}
        maxMistakes={maxMistakes}
      />
    </BrowserRouter>
  </Provider>,
  document.querySelector(`.main`));
};

init();
