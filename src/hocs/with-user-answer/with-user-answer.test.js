import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withUserAnswer from './with-user-answer.js';

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `./music/JK_leila.mp3`,
        genre: `country`,
      },
      {
        src: `./music/Jah_Khalib_angela.mp3`,
        genre: `reggae`,
      },
      {
        src: `./music/Animals.flac`,
        genre: `country`,
      },
      {
        src: `./music/Lullaby.flac`,
        genre: `reggae`,
      },
    ],
  },
};

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

it(`Should change active checkbox when checked`, () => {
  const wrapper = shallow(<MockComponentWrapped
    answers = {mock.question.answers}
    onAnswer= {jest.fn()}
  />);

  expect(wrapper.props().userAnswer).toEqual([false, false, false, false]);

  wrapper.props().onChange(0);
  expect(wrapper.props().userAnswer).toEqual([true, false, false, false]);

  wrapper.props().onChange(0);
  expect(wrapper.props().userAnswer).toEqual([false, false, false, false]);

  wrapper.props().onChange(2);
  expect(wrapper.props().userAnswer).toEqual([false, false, true, false]);

  wrapper.props().onChange(3);
  expect(wrapper.props().userAnswer).toEqual([false, false, true, true]);
});

