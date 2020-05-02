import React from 'react';
import PropTypes from "prop-types";

const withUserAnswer = (Component) => {
  class WithUserAnswer extends React.PureComponent {
    constructor(props) {
      super(props);

      const {answers} = this.props;

      this.state = {
        userAnswer: new Array(answers.length).fill(false),
      };
    }

    render() {
      const {onAnswer} = this.props;

      return <Component
        {...this.props}
        userAnswer={this.state.userAnswer}
        onChange={(i) => {
          const userAnswer = [...this.state.userAnswer];
          userAnswer[i] = !userAnswer[i];
          this.setState({userAnswer});
        }}
        onAnswer={() => onAnswer(this.state.userAnswer)}
      />;
    }
  }

  WithUserAnswer.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `pop`]).isRequired,
    })).isRequired,
    onAnswer: PropTypes.func.isRequired,
  };

  return WithUserAnswer;
};

export default withUserAnswer;
