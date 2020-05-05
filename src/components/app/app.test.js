import React from 'react';
import renderer from 'react-test-renderer';
import {App} from "./app.jsx";

it(`App correctly renders first screen`, () => {
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

it(`App correctly renders genre question screen`, () => {
  const tree = renderer
    .create(<App
      gameTime={10}
      questions={[]}
      mistakes={0}
      step={1}
      renderScreen={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`App correctly renders artist question screen`, () => {
  const tree = renderer
    .create(<App
      gameTime={10}
      questions={[]}
      mistakes={0}
      step={2}
      renderScreen={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


