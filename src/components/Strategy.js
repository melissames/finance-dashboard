import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStrategy } from '../actions/actionCreators.js'

class Strategy extends Component {

  handleChange = e => {
    this.props.updateAllocation(e.target.name, e.target.value)
    // console.log(e.target.value)
    // console.log(e.target.name)
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.props.strategy.name}</div>
        <div>
          {this.props.strategy.options[0].value/this.props.strategy.options[0].years}% Cap
          <input type='text' name={this.props.strategy.name} onChange={this.handleChange}></input>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAllocation: (name, value) => {
      dispatch({
        type: "UPDATE_STRATEGY",
        name,
        value
      });
    }
  };
}

export default connect(null, mapDispatchToProps)(Strategy);
