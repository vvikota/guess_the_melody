import React from 'react';
import renderer from 'react-test-renderer';
import {App} from "./app.jsx";

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      gameTime={10}
      errorCount={0}
      questions={[]}
      mistakes={0}
      maxMistakes={Infinity}
      step={-1}
      onUserAnswer={jest.fn()}
      onWelcomeScreenClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
