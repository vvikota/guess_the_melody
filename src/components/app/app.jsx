import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import WelcomeScreen from "../welcom-screen/welcom-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import ErrorCounter from "../errorCounter/errorCounter.jsx";
import withActivePlayer from "../../hocs/with-active-player/with-active-player.js";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer.js";
import withTransformProps from "../../hocs/with-transform-props/with-transform-props.js";

const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const QuestionGenreScreenWrapped = withUserAnswer(
    withActivePlayer(
        withTransformProps((props) => {
          return Object.assign({}, props, {
            renderAnswer: props.renderPlayer,
          });
        })(GenreQuestionScreen)));

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
        maxMistakes={maxMistakes}
        onClick={onWelcomeScreenClick}
      />;
    }

    const {
      onUserAnswer,
      mistakes,
      maxMistakes,
    } = this.props;

    switch (question.type) {
      case `genre`: return <QuestionGenreScreenWrapped
        question={question}
        answers={question.answers}
        onAnswer={(userAnswer) => onUserAnswer(
            userAnswer,
            question,
            mistakes,
            maxMistakes
        )}
        key={`genre-question-screen-${question}`}
      />;

      case `artist` : return <ArtistQuestionScreenWrapped
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
    // eslint-disable-next-line no-console
    // console.log(`${maxMistakes} in render`);

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
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
};

// функция описывает как изменяются пропсы апп при измененеи редакс-стейта
// фукция возвращает обьект , в ней описано как редакс-стейт преобразуется в пропсы аппа
// тут state это что приходит из хранилища, а ownProps - это пропсы которые передаются внутрь аппа, например questions.
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // тут step это пропсы аппа , а state.step это стейт из хранилища редакс
  step: state.step,
  mistakes: state.mistakes,
});
// сокращенно можно описать так(потому что проперти совпадают)
// const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, state);

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    // eslint-disable-next-line no-console
    // console.log(step);
    dispatch(ActionCreator.incrementStep());

    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question,
        mistakes,
        maxMistakes
    ));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
