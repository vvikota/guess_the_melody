import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorizationScreen from './authorization-screen';

Enzyme.configure({adapter: new Adapter()});

it(`Click on loginIn button, correctly works`, () => {
  const clickHandler = jest.fn();
  const logInScreen = shallow(<AuthorizationScreen
    onChange={jest.fn()}
    logIn={clickHandler}
    email={`test@test.ru`}
    password={`pass`}
  />);

  const logInButton = logInScreen.find(`button`);
  logInButton.simulate(`click`, {preventDefault() {}});
  logInButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(2);
});
