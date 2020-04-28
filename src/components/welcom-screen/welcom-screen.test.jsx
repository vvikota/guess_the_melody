import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcom-screen';

it(`WelcomeScreen renders`, ()=> {
  const tree = renderer
    .create(<WelcomeScreen
      gameTime={5}
      maxMistakes={3}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
