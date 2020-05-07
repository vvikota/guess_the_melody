import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  genre: `electronic`,
  type: `genre`,
  answers: [
    {
      src: `./music/Jah_Khalib_angela.mp3`,
      genre: `reggae`
    },
    {
      src: `./music/Jah_Khalib_angela.mp3`,
      genre: `reggae`
    },
    {
      src: `./music/Jah_Khalib_angela.mp3`,
      genre: `electronic`
    },
    {
      src: `./music/Jah_Khalib_angela.mp3`,
      genre: `electronic`
    },
  ]
};

it(`GenreQuestionScreen is correctly render`, ()=> {
  const tree = renderer
  .create(<GenreQuestionScreen
    question={mock}
    onAnswer={jest.fn()}
    userAnswer={[]}
    onChange={jest.fn()}
    renderAnswer={jest.fn()}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
