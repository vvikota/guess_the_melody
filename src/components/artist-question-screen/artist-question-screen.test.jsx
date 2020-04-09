import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

const mock = {

  song: {
    artist: `Jim Beam`,
  },
  answers: [
    {
      picture: ``,
      artist: `John Snow`,
    },
    {
      picture: ``,
      artist: `Jack Daniels`,
    },
    {
      picture: ``,
      artist: `Jim Beam`,
    },
  ],
};

it(`ArtistQuestionScreen is correcctly render`, ()=> {
  const {song, answers} = mock;
  const tree = renderer.create(<ArtistQuestionScreen
    answers={answers}
    song={song}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
