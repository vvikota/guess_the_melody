const initialState = {
  step: -1,
  mistakes: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return Object.assign({}, state, {
      step: state.step + action.payload,
    });
    case `RESET_STATE`: return initialState;
  }

  return state;
};

export {reducer};
