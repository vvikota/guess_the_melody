import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import WelcomeScreen from "../welcom-screen/welcom-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import ErrorCounter from "../errorCounter/errorCounter.jsx";


const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};
class App extends React.Component {

  _getScreen(question) {
    if (!question) {
      const {
        gameTime,
        maxMistakes,
        onWelcomeScreenClick
      } = this.props;

      return <WelcomeScreen
        gameTime={gameTime}
        errorCount={maxMistakes}
        onClick={onWelcomeScreenClick}
      />;
    }

    const {
      onUserAnswer,
      mistakes,
      maxMistakes,
    } = this.props;

    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        onAnswer={(userAnswer) => onUserAnswer(
            userAnswer,
            question,
            maxMistakes
        )}
        key={`genre-question-screen-${question}`}
      />;

      case `artist` : return <ArtistQuestionScreen
        question={question}
        onAnswer={(userAnswer) => onUserAnswer(
            userAnswer,
            question,
            mistakes,
            maxMistakes
        )}
        key={`artist-question-screen-${question}`}
      />;
    }

    return null;
  }

  render() {
    const {questions, step, mistakes} = this.props;

    return <section className={`game ${Type.ARTIST}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`
            }}
          />
        </svg>

        {/* <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div> */}

        <ErrorCounter
          mistakes={mistakes}
        />

      </header>

      {this._getScreen(questions[step])}
    </section>;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
};

// тут state это что приходит из хранилища, а ownProps - это пропсы, например questions.
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (question, userAnswer, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementStep(
        userAnswer,
        question,
        mistakes,
        maxMistakes
    ));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
