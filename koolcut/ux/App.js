const { ipcRenderer } = require('electron');
require('../less/main.less');
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ShotNav from './jsx/nav/ShotNav';
import Preview from './jsx/monitor/Preview';
import TimelinePanel from './jsx/timeline/TimelinePanel';

export default class App extends React.Component {
	render () {
    const shots = {};

		return (
      <div id="container">
      	<div id="top">
          <ShotNav navigationMaps={this.props.navigationMaps}/>
          <Preview/>
      	</div>
      	<TimelinePanel/>
  	  </div>
		)
	}
}

var navigationMaps = ipcRenderer.sendSync('retrieveProjects', 'ping');
ReactDOM.render(<App navigationMaps={navigationMaps} />, document.getElementById('content'));
