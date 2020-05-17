
const initialState = {
  isAuthorizationRequired: true,
};

const ActionCreator = {

  requiredAuthorization: (status) => {
    return {
      type: `REQUIRED_AUTHORIZATION`,
      payload: status,
    };
  },
};

const Operation = {
  requiredAuthorization: (status) => (dispatch, _getState, api) => {
    return api.post(`/login`, {
      email: `test@test.com`,
      password: 1234
    })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      dispatch(ActionCreator.requiredAuthorization(status));
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err.response.data.error);
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `REQUIRED_AUTHORIZATION`: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation
};

