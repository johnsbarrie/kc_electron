require('../less/main.less');
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
const ipcRenderer = require('electron').ipcRenderer;

var EntryPoint = React.createClass({
  render: function(){
    return (
    <div id="container">
    	<div id="top">
    		<div id="shot-nav">
    			<div id="shot-nav-content">
    			
    			</div>
    			<div id="footer">
    				
    			</div>
    		</div>
    		<div id="preview">
    			<div id="preview-content">
    			
    			</div>
    			<div id="footer">
    				
    			</div>
    		</div>
    	</div>
    	<div id="menu-bar">
            <div id="menu-timeline">
            </div>
            <div id="menu-transport">
                <div id="transport-buttons">
                    <div className="nav-start-button transport-button"></div>
                    <div className="nav-prev-button transport-button"></div>
                    <div id="nav-play-button" className="transport-button"></div>
                    <div className="nav-next-button transport-button"></div>
                    <div className="nav-end-button transport-button"></div>
                    <div className="nav-loop-button transport-button"></div>
                </div>    
            </div>
        </div>
		<div id="timeline">
			<div id="timeline-header">
			
			</div>
			<div id="timeline-content">

			</div>
		</div>
	</div>
    )
  }
});

ReactDOM.render(<EntryPoint />, document.getElementById('content'));


const asyncMsgBtn = document.getElementById('nav-play-button');
asyncMsgBtn.addEventListener('click', function () {
    var john = ipcRenderer.sendSync('synchronous-message', 'ping');
    console.log('clicked ', john);
})

