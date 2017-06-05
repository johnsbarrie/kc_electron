require('../less/main.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

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
                    <div id="nav-start-button" className="transport-button"></div>
                    <div id="nav-prev-button" className="transport-button"></div>
                    <div id='nav-play-button' className="transport-button"></div>
                    <div id="nav-next-button" className="transport-button"></div>
                    <div id="nav-end-button" className="transport-button"></div>
                    <div id="nav-loop-button" className="transport-button"></div>
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
