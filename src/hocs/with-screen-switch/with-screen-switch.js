import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/game/game.js";
import {Operation} from "../../reducer/user/user.js";
import {compose} from "recompose";
import {Switch, Route} from "react-router-dom";

import AuthorizationScreen from "../../components/authorization-screen/authorization-screen.jsx";
import WelcomeScreen from "../../components/welcom-screen/welcom-screen.jsx";
import GenreQuestionScreen from "../../components/genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../../components/artist-question-screen/artist-question-screen.jsx";
import GameOverScreen from "../../components/game-over-screen/game-over-screen.jsx";
import WinScreen from "../../components/win-screen/win-screen.jsx";
import withActivePlayer from "../with-active-player/with-active-player.js";
import withUserAnswer from "../with-user-answer/with-user-answer.js";
import withAuthorization from "../with-authorization/with-authorization.js";
import withTransformProps from "../with-transform-props/with-transform-props.js";
import {getStep, getMistakes} from "../../reducer/game/selectors.js";
import {getQuestions} from "../../reducer/data/selectors.js";
import {getIsAuthorizationRequired} from "../../reducer/user/selectors.js";


const AuthorizationScreenWrapped = withAuthorization(AuthorizationScreen);
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const QuestionGenreScreenWrapped = withUserAnswer(
    withActivePlayer(
        withTransformProps((props) => {
          return Object.assign({}, props, {
            renderAnswer: props.renderPlayer,
          });
        })(GenreQuestionScreen)));

const withScreenSwitch = (Component) => {
  class WithScreenSwitch extends React.PureComponent {
    constructor(props) {
      super(props);

      this._getScreen = this._getScreen.bind(this);
    }

    render() {
      return <Switch>
        <Route path="/" exact render={() => <Component
          {...this.props}
          renderScreen={this._getScreen}
        />} />
        <Route path="/login" component={AuthorizationScreenWrapped} />
      </Switch>;
    }

    _getScreen(question) {

      if (!question) {
        const {step, questions} = this.props;

        if (step > questions.length - 1) {
          return <WinScreen
            onRelaunchButtonClick={resetGame}
          />;
        } else {
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
      }

      const {
        onUserAnswer,
        mistakes,
        maxMistakes,
        resetGame,
        step,
      } = this.props;

      if (mistakes >= maxMistakes) {
        return <GameOverScreen
          onRelaunchButtonClick={resetGame}
        />;
      }

      switch (question.type) {
        case `genre`: return <QuestionGenreScreenWrapped
          question={question}
          answers={question.answers}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              question
          )}
          key={`genre-question-screen-${step}`}
        />;

        case `artist` : return <ArtistQuestionScreenWrapped
          question={question}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              question
          )}
          key={`artist-question-screen-${step}`}
        />;
      }

      return null;
    }
  }

  WithScreenSwitch.propTypes = {
    step: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
    mistakes: PropTypes.number.isRequired,
    maxMistakes: PropTypes.number.isRequired,
    gameTime: PropTypes.number.isRequired,
    onWelcomeScreenClick: PropTypes.func.isRequired,
    onUserAnswer: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    isAuthorizationRequired: PropTypes.bool.isRequired,
    sendAuthorizationRequest: PropTypes.func.isRequired,
  };

  return WithScreenSwitch;
};

export {withScreenSwitch};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questions: getQuestions(state),
  step: getStep(state),
  mistakes: getMistakes(state),
  isAuthorizationRequired: getIsAuthorizationRequired(state),
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),
  onUserAnswer: (userAnswer, question) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question
    ));
  },

  resetGame: () => dispatch(ActionCreator.resetGame()),
  sendAuthorizationRequest: (data) => dispatch(Operation.requiredAuthorization(data)),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withScreenSwitch
);
