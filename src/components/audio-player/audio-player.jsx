import React from "react";
import PropTypes from "prop-types";

const AudioPlayer = (props) => {

  const {isPlaying, isLoading, renderAudio, onPlayButtonClick} = props;

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        {renderAudio()}
      </div>
    </React.Fragment>
  );
};

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  renderAudio: PropTypes.func.isRequired,
};

export default AudioPlayer;
