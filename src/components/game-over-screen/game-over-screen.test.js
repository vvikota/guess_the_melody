import React from 'react';
import renderer from 'react-test-renderer';
import GameOverScreen from './game-over-screen';

it(`GameOverScreen renders`, ()=> {
  const tree = renderer
    .create(<GameOverScreen
      onRelaunchButtonClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
