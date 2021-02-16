import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions/removeAction';

const AddedFeature = props => {

  const handleRemoveFeature = event => {
    event.preventDefault();
    props.removeFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
