import React from 'react';
import renderer from 'react-test-renderer';
import AuthorizationScreen from './authorization-screen';

it(`AuthorizationScreen renders`, ()=> {
  const tree = renderer
    .create(<AuthorizationScreen
      onChange={jest.fn()}
      logIn={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
