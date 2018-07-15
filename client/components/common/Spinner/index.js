import React from 'react';
import { style } from './spinner.scss';

export default ({ size, overly }) => {
  let customeStyle = {};
  let sizeClass = '';
  if (size) {
    if (size === parseInt(size, 10)) {
      customeStyle = {
        height: size || null,
        width: size || null,
      };
    } else {
      sizeClass = size;
    }
  } else {
    sizeClass = 'medium';
  }

  return (
    <div className={`${style} ${sizeClass} loading-spinner ${overly ? 'overly' : ''}`} style={customeStyle}>
      <div className="sk-circle1 sk-circle" />
      <div className="sk-circle2 sk-circle" />
      <div className="sk-circle3 sk-circle" />
      <div className="sk-circle4 sk-circle" />
      <div className="sk-circle5 sk-circle" />
      <div className="sk-circle6 sk-circle" />
      <div className="sk-circle7 sk-circle" />
      <div className="sk-circle8 sk-circle" />
      <div className="sk-circle9 sk-circle" />
      <div className="sk-circle10 sk-circle" />
      <div className="sk-circle11 sk-circle" />
      <div className="sk-circle12 sk-circle" />
    </div>
  );
};
