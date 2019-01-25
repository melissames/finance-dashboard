import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStrategies, resetTotal, updateStrategy, submittedStrategy } from '../actions/actionCreators.js'

class TotalAllocation extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.submittedStrategy();
  }

  handleReset = () => {
    this.props.addStrategies();
    this.props.updateStrategy();
    this.props.resetTotal();
  }

  render() {
    return (
      <div className='total-allocation'>
        <div className='total-allocation-list'>
          <div className='total-percentage-grouping-left'>
            <div className='total-percentage-box' style={{borderColor: this.props.color}}>
              {this.props.totalPercentage ? `${this.props.totalPercentage}%` : null}
            </div>
            <div className='total-allocation-font'>Total Allocation</div>
          </div>
          <div className='total-percentage-grouping-right'>
            <input
              className='confirm-button'
              type='submit'
              value='Confirm'
              disabled={this.props.disabled}
              onClick={this.handleSubmit}></input>
              <input
                className='reset-button'
                type='reset'
                onClick={this.handleReset}>
              </input>
            </div>
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
