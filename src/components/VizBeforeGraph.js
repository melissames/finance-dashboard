import React, { Component } from 'react';
import folderIcon from '../icons/file-folder-icon.png'

class VizBeforeGraph extends Component {
  render() {
    return (
      <div>
        <div className='viz-before-graph'>
          <div className='graph-container-shaddow'>
            <div className='graph-shaddow'>
              <div className='graph-negative-space'></div>
            </div>
          </div>
          <div className='icon-container'>
            <img className='folder-icon' src={folderIcon} alt=''></img>
            <div className='viz-before-graph-description'>
              Please input desired allocation into available strategies to enable analysis and further actions.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VizBeforeGraph;
