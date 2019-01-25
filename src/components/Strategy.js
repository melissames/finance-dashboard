import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStrategy, strategyTotal } from '../actions/actionCreators.js'

class Strategy extends Component {

  handleChange = e => {
    this.props.updateStrategy(e.target.name, e.target.value);
    this.props.strategyTotal();
  }

  render() {
    return (
      <React.Fragment>
        <div className='table-cell'>{this.props.strategy.name}</div>
        <div className='table-cell'>
          {this.props.strategy.options[0].value/this.props.strategy.options[0].years}% Cap
          <input className='table-input' type='number' name={this.props.strategy.name} onChange={this.handleChange}></input>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { updateStrategy, strategyTotal })(Strategy);
