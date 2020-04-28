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

  incrementMistake: (userAnswer, question, mistakes, maxMistakes) => {
    // eslint-disable-next-line no-console
    // console.log(userAnswer, question, mistakes, maxMistakes);
    let answerIsCorrect = false;
    // eslint-disable-next-line no-console
    // console.log(answerIsCorrect);

    switch (question.type) {
      case `artist`:
        // eslint-disable-next-line no-console
        //  console.log(answerIsCorrect);
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        // eslint-disable-next-line no-console
        // console.log(answerIsCorrect);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        // eslint-disable-next-line no-console
        // console.log(answerIsCorrect);
        break;
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return {
        type: `RESET_STATE`,
      };
    }

    return {
      type: `INCREMENT_MISTAKE`,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return Object.assign({}, state, {
      step: state.step + action.payload,
    });

    case `RESET_STATE`: return initialState;

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
