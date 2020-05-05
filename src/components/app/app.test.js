import React from 'react';
import renderer from 'react-test-renderer';
import {App} from "./app.jsx";

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      gameTime={10}
      questions={[]}
      mistakes={0}
      step={-1}
      renderScreen={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
