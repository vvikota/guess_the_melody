import React from 'react';
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import withAudio from "../with-audio/with-audio.js";

const AudioPlayerWrapped = withAudio(AudioPlayer);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1,
      };
    }

    render() {
      const {activePlayer} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(it, i) => {
          return <AudioPlayerWrapped
            src={it.src}
            isPlaying={i === activePlayer}
            onPlayButtonClick = {() => this.setState({
              activePlayer: activePlayer === i ? -1 : i
            })}
          />;
        }}
      />;
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
