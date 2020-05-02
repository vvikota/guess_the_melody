import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  genre: `rock`,
  type: `genre`,
  answers: [
    {
      src: `./music/Jah_Khalib_angela.mp3`,
      genre: `rock`
    },
    {
      src: `./music/Jah_Khalib_angela.mp3`,
      genre: `jazz`
    },
    {
      src: `./music/Jah_Khalib_angela.mp3`,
      genre: `pop`
    },
    {
      src: `./music/Jah_Khalib_angela.mp3`,
      genre: `jazz`
    },
  ]
};

it(`GenreQuestionScreen is correctly render`, ()=> {
  const tree = renderer
  .create(<GenreQuestionScreen
    question={mock}
    onAnswer={jest.fn()}
    activePlayer={-1}
    userAnswer={[]}
    onChange={jest.fn()}
    onPlayButtonClick={jest.fn()}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
