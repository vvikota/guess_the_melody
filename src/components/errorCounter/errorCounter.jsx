import React from 'react';
import PropTypes from "prop-types";

const ErrorCounter = (props) => {
  const {mistakes} = props;

  return (
    <div className="game__mistakes">
      {Array.from({length: mistakes}, (v, k) => k).map((it) => <div className="wrong" key={it}/>)}
    </div>
  );
};

ErrorCounter.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default ErrorCounter;
