import React from "react";
import PropTypes from "prop-types";

const WelcomeScreen = (props) => {
  const {gameTime, maxMistakes, onClick} = props;

  return (
    <section className="welcome">
      <button className="welcome__button" onClick={onClick}>
        <span className="visually-hidden">Начать игру</span>
      </button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>За {gameTime} минут нужно ответить на все вопросы.</li>
        <li>Можно допустить {maxMistakes} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  gameTime: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WelcomeScreen;
