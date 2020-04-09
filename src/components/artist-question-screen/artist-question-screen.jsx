import React from 'react';
import PropTypes from "prop-types";

const ArtistQuestionScreen = ({question, onAnswer}) => {
  const {
    answers,
  } = question;

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button" />
      <audio />
    </div>

    <form className="game__artist" onChange={onAnswer}>
      {answers.map((it, i) => <div className="artist" key={i}>
        <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${i}`} id={`artist-${i}`} />
        <label className="artist__name" htmlFor={`artist-${i}`}>
          <img className="artist__picture" src={it.picture} alt={it.artist} />
          {it.artist}
        </label>
      </div>)}
    </form>
  </section>;
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.object,
  onAnswer: PropTypes.func,
};

export default ArtistQuestionScreen;
