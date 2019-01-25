import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalAllocation extends Component {
  render() {
    return (
      <div className='total-allocation'>
        <div>
          <div className='total-percentage-box' style={{borderColor: this.props.color}}>{this.props.totalPercentage ? `${this.props.totalPercentage}%` : null}</div>
          <div>TotalAllocation</div>
        </div>
        <div>
          <input type='submit' value='Confirm'></input>
          <input type='reset'></input>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    totalPercentage: reduxState.strategyPercentage,
    color: reduxState.oneHundredPercent,
  }
}

export default connect(mapStateToProps)(TotalAllocation);
