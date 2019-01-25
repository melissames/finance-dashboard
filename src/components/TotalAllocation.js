import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStrategies, resetTotal, updateStrategy, submittedStrategy } from '../actions/actionCreators.js'

class TotalAllocation extends Component {

  handleClick = () => {
    this.props.submittedStrategy()
  }

  handleReset = () => {
    this.props.addStrategies();
    this.props.updateStrategy();
    this.props.resetTotal();
  }

  render() {
    return (
      <div className='total-allocation'>
        <div>
          <div className='total-percentage-box' style={{borderColor: this.props.color}}>{this.props.totalPercentage ? `${this.props.totalPercentage}%` : null}</div>
          <div>TotalAllocation</div>
        </div>
        <div>
          <input type='submit' value='Confirm' disabled={this.props.disabled} onClick={this.handleClick}></input>
          <input type='reset' onClick={this.handleReset}></input>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    totalPercentage: reduxState.strategyPercentage,
    color: reduxState.oneHundredPercent,
    disabled: reduxState.disabled
  }
}

export default connect(mapStateToProps, { submittedStrategy, addStrategies, resetTotal, updateStrategy })(TotalAllocation);
