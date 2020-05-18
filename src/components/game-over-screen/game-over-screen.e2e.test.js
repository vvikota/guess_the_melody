import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameOverScreen from './game-over-screen';

Enzyme.configure({adapter: new Adapter()});

it(`Click on restart game button, correctly works`, () => {
  const clickHandler = jest.fn();
  const gameOverScreen = shallow(<GameOverScreen
    onRelaunchButtonClick={clickHandler}
  />);

  const restartButton = gameOverScreen.find(`button`);
  restartButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

