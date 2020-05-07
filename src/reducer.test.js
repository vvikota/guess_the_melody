import MockAdapter from "axios-mock-adapter";
import {reducer, Operation} from "./reducer.js";
import {createAPI} from "./api";

it(`Should return initial state by default`, () => {
  expect(reducer(undefined, {})).toEqual({
    step: -1,
    mistakes: 0,
    questions: [],
    isAuthorizationRequired: false,
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
    type: `RESET_GAME`,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions: [],
    isAuthorizationRequired: false,
  });
});

it(`Should increment mistakes by a make mistake`, () => {
  expect(reducer({
    step: 0,
    mistakes: 0,
  }, {
    type: `INCREMENT_MISTAKE`,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 1,
  });
});

it(`Should make a correct API call to /questions`, function () {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const questionLoader = Operation.loadQuestions();

  apiMock
    .onGet(`/questions`)
    .reply(200, [{fake: true}]);

  return questionLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `LOAD_QUESTIONS`,
        payload: [{fake: true}],
      });
    });
});
