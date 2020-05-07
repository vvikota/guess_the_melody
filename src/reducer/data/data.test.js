import MockAdapter from "axios-mock-adapter";
import {Operation} from "./data.js";
import {createAPI} from "../../api.js";

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
