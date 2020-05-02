import React from 'react';
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

class GenreQuestionScreen extends React.PureComponent {

  render() {
    const {
      question,
      onAnswer,
      activePlayer,
      onPlayButtonClick,
      userAnswer,
      onChange,
    } = this.props;

    const {
      answers,
      genre,
    } = question;

    return <section className="game__screen">

      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer();
        // eslint-disable-next-line no-console
        // console.log(this.state.userAnswer);
      }}>
        {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
          <AudioPlayer
            src={it.src}
            isPlaying={i === activePlayer}
            onPlayButtonClick = {() => onPlayButtonClick(i)}
          />
          <div className="game__answer">
            <input
              checked={userAnswer[i]}
              type="checkbox"
              className="game__input visually-hidden"
              name="answer"
              value={`answer-${i}`}
              id={`answer-${i}`}
              onChange={() => onChange(i)}
            />
            <label className="game__check" htmlFor={`answer-${i}`}>
              Отметить
            </label>
          </div>
        </div>
        )}
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }
}

GenreQuestionScreen.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `pop`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `pop`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
  userAnswer: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default GenreQuestionScreen;

