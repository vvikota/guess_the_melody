import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcom-screen/welcom-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";

const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
      mistakes: 0,
    };
  }

  _getScreen(question, onClick) {
    if (!question) {
      const {
        gameTime,
        errorCount,
      } = this.props;

      return <WelcomeScreen
        gameTime={gameTime}
        errorCount={errorCount}
        onClick={onClick}
      />;
    }

    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        onAnswer={onClick}
        key={`genre-question-screen-${question}`}
      />;

      case `artist` : return <ArtistQuestionScreen
        question={question}
        onUserAnswer={onClick}
        key={`artist-question-screen-${question}`}
      />;
    }

    return null;
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return <section className={`game ${Type.ARTIST}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidde">Сыграть ещё раз</span>
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

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>

      </header>

      {this._getScreen(questions[question], () => {
      //  let isAnswerCorrect = false;

        this.setState({
          question: question + 1 >= questions.length
            ? -1
            : question + 1,
        });
        // switch (questions[question].type) {
        //   case `genre` :
        //     isAnswerCorrect = false;
        //     break;
        //   case `artist` :
        //     isAnswerCorrect = userAnswer.artist === question.song.artist;
        //     break;
        // }

        // if (isAnswerCorrect) {
        //   this.setState({
        //     question: question + 1 >= questions.length
        //       ? -1
        //       : question + 1,
        //   });
        // } else {
        //   this.setState({
        //     mistakes: this.state.mistakes + 1,
        //   });
        // }
      })}
    </section>;
  }
}

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  questions: PropTypes.array,
};

export default App;
