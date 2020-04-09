import React from 'react';
import PropTypes from "prop-types";

const GenreQuestionScreen = ({question, onAnswer}) => {
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
        <button className="track__button track__button--play" type="button"/>
        <div className="track__status">
          <audio />
        </div>
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
};

GenreQuestionScreen.propTypes = {
  question: PropTypes.object,
  onAnswer: PropTypes.func,
};

export default GenreQuestionScreen;

