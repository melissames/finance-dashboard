import React, { Component } from 'react';
import VisualizationContainer from './VisualizationContainer.js';
import StrategyOptionsContainer from './StrategyOptionsContainer.js'

class StrategyContainer extends Component {
  render() {
    return (
      <div className='strategy-container'>
        <nav className='nav-bar'>Allocation Strategy</nav>
        <VisualizationContainer />
        <StrategyOptionsContainer />
      </div>
    );
  }
}

export default StrategyContainer;
