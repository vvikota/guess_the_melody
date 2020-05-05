import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ErrorCounter from "../errorCounter/errorCounter.jsx";

const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};

class App extends React.Component {

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

      {this.props.renderScreen(questions[step])}
    </section>;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  renderScreen: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questions: state.questions,
  step: state.step,
});

export {App};

export default connect(mapStateToProps)(App);
