import React, { Component } from 'react';
import Strategy from './Strategy.js';
import { connect } from 'react-redux';
import { addStrategies } from '../actions/actionCreators.js'


class StrategyList extends Component {

  // updateStore = () => {
  //   let formattedStrategyData = {}
  //   this.state.strategyData.map(strategy => {
  //     formattedStrategyData[strategy.name] = 0
  //   });
  //   this.updateStrategyPercentages(formattedStrategyData)
  // }
  //
  // updateStrategyPercentages = formattedStrategyData => {
  //   this.setState(prevState => ({
  //     strategyPercentages: {
  //       ...prevState.strategyPercentages,
  //       strategyPercentages: formattedStrategyData
  //     }
  //   }))
  // }

  createTable = () => {
    return this.props.strategyData.map(strategy => <Strategy key={strategy.id} strategy={strategy} />)
  }

  render() {
    return (
      <div className='strategy-list'>
        <div>Index Crediting Strategies</div>
        <div>1-Year P2P</div>
        {this.createTable()}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    strategyData: reduxState.strategyData
  }
}

export default connect(mapStateToProps, { addStrategies })(StrategyList);
