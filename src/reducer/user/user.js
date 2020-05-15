
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
};

