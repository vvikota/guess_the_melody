import React from 'react';
import renderer from 'react-test-renderer';
import ErrorCounter from './errorCounter.jsx';

it(`ErrorCounter is correctly render`, ()=> {
  const tree = renderer
  .create(<ErrorCounter
    mistakes={3}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
