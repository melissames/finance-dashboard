import React, { Component } from 'react';

class OptionsToggle extends Component {
  render() {
    return (
      <div className='options-toggle'>
        Surrender Charge Period
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>

        Initial Premium
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
      </div>
    );
  }
}

export default OptionsToggle;
