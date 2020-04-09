import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcom-screen/welcom-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        gameTime={gameTime}
        errorCount={errorCount}
        onClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist` : return <ArtistQuestionScreen
        question={currentQuestion}
        onUserAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState({
        question: question + 1 >= questions.length
          ? -1
          : question + 1,
      });
    });
  }
}

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  questions: PropTypes.array,
};

export default App;
