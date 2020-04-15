import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  genre: `rock`,
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
      genre: `blues`
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
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
