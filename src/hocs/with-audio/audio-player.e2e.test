import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

it(`On click play-button Player play and stop`, () => {
  const player = mount(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick={jest.fn()}
    src={`path`}
  />);

  expect(player.state(`isPlaying`)).toEqual(false);

  player.instance()._audioRef.current.pause = () => {};
  player.instance()._audioRef.current.play = () => {};

  player.setState({isLoading: false});
  player.update();

  const button = player.find(`button`);

  button.simulate(`click`);
  expect(player.state(`isPlaying`)).toEqual(true);

  button.simulate(`click`);
  expect(player.state(`isPlaying`)).toEqual(false);
});
