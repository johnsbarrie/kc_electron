require('../less/main.less');
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ShotNav from './jsx/ShotNav';
import Preview from './jsx/Preview';
import Timeline from './jsx/Timeline';
export default class App extends React.Component {
	render () {
    const shots = {
    };

		return (
      <div id="container">
      	<div id="top">
          <ShotNav/>
          <Preview/>
      	</div>
      	<Timeline/>
  	  </div>
		)
	}
}

const ipcRenderer = require('electron').ipcRenderer;
ReactDOM.render(<App/>, document.getElementById('content'));

const asyncMsgBtn = document.getElementById('nav-play-button');
asyncMsgBtn.addEventListener('click', function () {
  var john = ipcRenderer.sendSync('synchronous-message', 'ping');
})
