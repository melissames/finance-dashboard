import React, { Component } from 'react';
import StrategyList from './StrategyList.js';
import TotalAllocation from './TotalAllocation.js';
import OptionsToggle from './OptionsToggle.js';

class StrategyOptionsContainer extends Component {
  render() {
    return (
      <div className='strategy-options'>
        <OptionsToggle />
        <StrategyList />
        <TotalAllocation />
      </div>
    );
  }
}

export default StrategyOptionsContainer;
