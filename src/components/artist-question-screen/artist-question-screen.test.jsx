import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

const mock = {
  answers: [
    {
      picture: `./img/artist_1.jpg`,
      artist: `John Snow`,
    },
    {
      picture: `./img/artist_2.jpg`,
      artist: `Jack Daniels`,
    },
    {
      picture: `./img/artist_3.jpg`,
      artist: `Jim Beam`,
    },
  ],
  song: {
    artist: `Jim Beam`,
    src: `./music/Jah_Khalib_angela.mp3`,
  },
  type: `artist`,
};

it(`ArtistQuestionScreen is correcctly render`, ()=> {

  const tree = renderer.create(<ArtistQuestionScreen
    question={mock}
    onAnswer={jest.fn()}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
