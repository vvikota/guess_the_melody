const initialState = {
  step: -1,
  mistakes: 0,
};

const isArtistAnswerCorrect = (userAnswer, question) =>
  userAnswer.artist === question.song.artist;

const isGenreAnswerCorrect = (userAnswer, question) =>
  userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));

const ActionCreator = {
  incrementStep: () => ({
    type: `INCREMENT_STEP`,
    payload: 1,
  }),

  incrementMistake: (userAnswer, question) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    return {
      type: `INCREMENT_MISTAKE`,
      payload: answerIsCorrect ? 0 : 1,
    };
  },

  resetGame: () => {
    return {
      type: `RESET_GAME`,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return Object.assign({}, state, {
      step: state.step + action.payload,
    });

    case `RESET_GAME`: return initialState;

    case `INCREMENT_MISTAKE`: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator
};
