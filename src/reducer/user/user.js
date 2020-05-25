
const initialState = {
  isAuthorizationRequired: true,
  name: undefined,
  password: undefined,
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
  requiredAuthorization: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      dispatch(ActionCreator.requiredAuthorization(response.data));
      history.pushState(null, null, `/win`);
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
      isAuthorizationRequired: false,
      email: action.payload.email,
      password: action.payload.password,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation
};

