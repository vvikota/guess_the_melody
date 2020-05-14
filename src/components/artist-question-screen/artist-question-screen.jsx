import React from 'react';
import PropTypes from "prop-types";

class ArtistQuestionScreen extends React.PureComponent {

  render() {
    const {question, onAnswer, renderPlayer} = this.props;
    // eslint-disable-next-line no-console
    // console.log(this.props);
    const {
      answers,
      song,
    } = question;

    return <section className="game__screen" key={`artist-question-screen-${question}`}>
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">

        {renderPlayer(song, 0)}
      </div>

      <form className="game__artist">
        {answers.map((it, i) => <div className="artist" key={i}>
          <input
            className="artist__input visually-hidden"
            type="radio"
            name="answer"
            value={`artist-${i}`}
            id={`artist-${i}`}
            onChange={() => onAnswer(it)}
          />
          <label className="artist__name" htmlFor={`artist-${i}`}>
            <img className="artist__picture" src={it.picture} alt={it.artist} />
            {it.artist}
          </label>
        </div>)}
      </form>
    </section>;
  }
}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
