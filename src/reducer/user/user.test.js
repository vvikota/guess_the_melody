import MockAdapter from "axios-mock-adapter";
import {Operation} from "./user.js";
import {createAPI} from "../../api.js";

it(`Should make a correct API call to /login`, function () {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const logInQuestion = Operation.requiredAuthorization();

  apiMock
    .onPost(`/login`)
    .reply(200, [{email: `wij87@tut.by`, password: 123}]);

  return logInQuestion(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `REQUIRED_AUTHORIZATION`,
        payload: [{email: `wij87@tut.by`, password: 123}],
      });
    });
});
