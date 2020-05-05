import React from 'react';
import PropTypes from "prop-types";

class GenreQuestionScreen extends React.PureComponent {

  render() {
    const {
      question,
      onAnswer,
      userAnswer,
      onChange,
      renderAnswer,
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
      }}>
        {answers.map((it, i) => <div className="track" key={`answer-${i}`}>

          {renderAnswer(it, i)}
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
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`electronic`, `country`, `alternative`, `reggae`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`electronic`, `country`, `alternative`, `reggae`]).isRequired,
    type: PropTypes.oneOf([`electronic`, `country`, `alternative`, `reggae`]).isRequired,
  }).isRequired,
  userAnswer: PropTypes.arrayOf(PropTypes.bool).isRequired,
  renderAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;

