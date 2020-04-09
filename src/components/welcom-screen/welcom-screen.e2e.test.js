import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcom-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on start game button, correctly works`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    errorCount={0}
    gameTime={0}
    onClick={clickHandler}
  />);

  const startButton = welcomeScreen.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
