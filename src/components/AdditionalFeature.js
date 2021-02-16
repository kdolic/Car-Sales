import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/addAction';

const AdditionalFeature = props => {

  const handleAddFeature = event => {
    event.preventDefault();
    props.addFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
