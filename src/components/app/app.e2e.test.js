import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./app";

configure({adapter: new Adapter()});

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `blues`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
        {
          src: `path`,
          genre: `jazz`,
        },
        {
          src: `path`,
          genre: `blues`,
        },
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
  ],
};

it(`On click on WelcomeScreen App switches to the first question`, () => {
  const {questions} = mock;
  const app = mount(<App
    errorCount={0}
    gameTime={0}
    questions={questions}
  />);

  const button = app.find(`button`);
  button.simulate(`click`);
  app.update();

  expect(app.state(`question`)).toEqual(0);

});
