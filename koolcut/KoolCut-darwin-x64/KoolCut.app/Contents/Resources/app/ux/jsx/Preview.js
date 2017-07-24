'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
export default class Preview extends React.Component {
	render () {
		return (
			<div id="preview">
				<div id="preview-content">
					<div id="preview-content-floater">
						<image width="100%" height="100%" src='file:///Users/javanai/Documents/KoolCapture/Film/shots/ff/png/view0000001.png'/>
					</div>
				</div>
				<div id="footer">
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
			</div>

		)
	}
}
