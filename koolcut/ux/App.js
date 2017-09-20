const { ipcRenderer } = require('electron');
require('../less/main.less');
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ShotNav from './jsx/ShotNav';
import Preview from './jsx/Preview';
import Timeline from './jsx/Timeline';

export default class App extends React.Component {
	render () {
    const shots = {};

		return (
      <div id="container">
      	<div id="top">
          <ShotNav navigationMaps={this.props.navigationMaps}/>
          <Preview/>
      	</div>
      	<Timeline/>
  	  </div>
		)
	}
}

var navigationMaps = ipcRenderer.sendSync('retrieveProjects', 'ping');
ReactDOM.render(<App navigationMaps={navigationMaps} />, document.getElementById('content'));
