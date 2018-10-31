import React from 'react';
import PropTypes from 'prop-types';

const Price = ( props ) => (
    <span> {props.price} </span>
);

// Price.PropTypes = {
//     price: PropTypes.number.isRequired
// }
export default Price;