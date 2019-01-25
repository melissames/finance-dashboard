import React, { Component } from 'react';
import VizBeforeGraph from './VizBeforeGraph.js';
import Graph from './Graph.js';
import { connect } from 'react-redux';

class VisualizationContainer extends Component {
  render() {
    return (
      <div>
        {this.props.submitted ? <Graph /> : <VizBeforeGraph />}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    submitted: reduxState.submitted
  }
}

export default connect(mapStateToProps)(VisualizationContainer);
