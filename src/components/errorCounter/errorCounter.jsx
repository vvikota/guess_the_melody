import React from 'react';
import PropTypes from "prop-types";

const ErrorCounter = (props) => {
  const {mistakes} = props;

  return (
    <div className="game__mistakes">
      {new Array(mistakes).fill(1).map((it, index) => <div className="wrong" key={index}/>)}
    </div>
  );
};

ErrorCounter.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default ErrorCounter;
