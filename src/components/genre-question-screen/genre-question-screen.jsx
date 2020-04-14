import React from 'react';
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }

  render() {
    const {question, onAnswer} = this.props;

    const {
      answers,
      genre,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer();
      }}>
        {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
          <AudioPlayer
            src={it.src}
            isPlaying={i === this.state.activePlayer}
            onPlayButtonClick = {() => this.setState({
              activePlayer: this.state.activePlayer === i ? -1 : i
            })}
          />
          <div className="game__answer">
            <input type="checkbox" className="game__input visually-hidden" name="answer" value={`answer-${i}`}/>
            <label htmlFor={`answer-${i}`}>
              Отметить
            </label>
          </div>
        </div>)}
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.object,
  onAnswer: PropTypes.func,
};

export default GenreQuestionScreen;

