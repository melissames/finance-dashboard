import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStrategy } from '../actions/actionCreators.js'

class Strategy extends Component {

  handleChange = e => {
    // console.log(e.target.name, e.target.value)
    this.props.updateStrategy(e.target.name, e.target.value)
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

export default connect(null, { updateStrategy })(Strategy);
