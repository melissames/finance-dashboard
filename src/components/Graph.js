import React, { Component } from 'react';
import { VictoryPie } from 'victory-pie';
import { VictoryLegend } from 'victory-legend';
import { connect } from 'react-redux';

class Graph extends Component {

  formatGraphData = data => {
    let formattedData = []
    for(let name in data){
      if(data[name] !== 0){
        formattedData.push({x: name, y: data[name]})
      }
    }
    return formattedData
  }

  formatLegendData = data => {
    let formattedData = []
    for(let name in data){
      if(data[name] !== 0){
        formattedData.push({name: name})
      }
    }
    return formattedData
  }

  handleSubmit = e => {
    
  }

  render() {
    return (
      <div>
          <VictoryPie
            width={300} height={200}
            padding={{ left: 100, bottom: 20, top: 20 }}
            data={this.formatGraphData(this.props.strategyData)}
            innerRadius={75}
            colorScale={["blue", "navy", "teal", "aqua"]}
            labels={() => null}
          />
          <svg width={300} height={300}>
          <VictoryLegend standalone={false}
            colorScale={["blue", "navy", "teal", "aqua"]}
            x={20} y={40}
            gutter={20}
            centerTitle
            style={{ border: { stroke: "black" } }}
            data={this.formatLegendData(this.props.strategyData)}
          />
        </svg>
        <input type='submit' value='Submit' onClick={this.handleClick}></input>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    strategyData: reduxState.formattedStrategyData
  }
}

export default connect(mapStateToProps)(Graph);
