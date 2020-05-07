import api from "./api";

const initialState = {
  step: -1,
  mistakes: 0,
  questions: [],
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

  loadQuestions: (questions) => {
    return {
      type: `LOAD_QUESTIONS`,
      payload: questions,
    };
  },

  resetGame: () => {
    return {
      type: `RESET_GAME`,
    };
  },
};

// const Operation = {
//   loadQuestions: () => (dispatch) => {
//     return fetch(`https://es31-server.appspot.com/guess-melody/questions`)
//     .then((response) => response.json())
//     .then((questions) => {
//       dispatch(ActionCreator.loadQuestions(questions));
//     });
//   },
// };

const Operation = {
  loadQuestions: () => (dispatch) => {
    return api.get(`/questions`)
    .then((response) => {
      dispatch(ActionCreator.loadQuestions(response.data));
    });
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

    case `LOAD_QUESTIONS`: return Object.assign({}, state, {
      questions: action.payload,
    });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation
};
