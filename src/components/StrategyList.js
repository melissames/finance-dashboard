import React, { Component } from 'react';
import Strategy from './Strategy.js';
import { connect } from 'react-redux';
import { addStrategies } from '../actions/actionCreators.js'


class StrategyList extends Component {

  componentDidMount = () => {
    this.props.addStrategies()
  }

  createTable = () => {
    return this.props.strategyData.map(strategy => <Strategy key={strategy.name} id={strategy.name} strategy={strategy} />)
  }

  render() {
    return (
      <div className='strategy-list'>
        <div className='index-strategies-title'>Index Crediting Strategies</div>
        <div className='yearly-strategies-title'>1-Year P2P</div>
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
