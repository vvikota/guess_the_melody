import {reducer} from "./reducer.js";

it(`Should return initial state by default`, () => {
  expect(reducer(undefined, {})).toEqual({
    step: -1,
    mistakes: 0,
  });
});

it(`Should increment current step by a given number`, () => {
  expect(reducer({
    step: 0,
    mistakes: 0,
  }, {
    type: `INCREMENT_STEP`,
    payload: 1,
  })).toEqual({
    step: 1,
    mistakes: 0,
  });
});

it(`Should reset state`, () => {
  expect(reducer({
    step: 10,
    mistakes: 3,
  }, {
    type: `RESET_STATE`,
  })).toEqual({
    step: -1,
    mistakes: 0,
  });
});
