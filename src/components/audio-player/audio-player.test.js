import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const mock = {
  isPlaying: true,
  src: `./music/Jah_Khalib_angela.mp3`
};

it(`Audioplayer is correctly render`, () => {
  const tree = renderer
  .create(<AudioPlayer
    isPlaying={mock.isPlaying}
    onPlayButtonClick={jest.fn()}
    src={mock.src}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

