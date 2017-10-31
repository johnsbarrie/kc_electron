'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TimelineScroller from './TimelineScroller';

export default class TimelinePanel extends React.Component {
	render () {
		const timelineData = [
				{ name:"shot1", length:1 },
				{ name:"shot2", length:80 },
				{ name:"shot1", length:5 },
				{ name:"shot2", length:30 },
				{ name:"shot3", length:280 },
				{ name:"shot4", length:180 },
				{ name:"shot5", length:180 },
				{ name:"shot6", length:180 },
				{ name:"shot4", length:180 },
				{ name:"shot5", length:180 },
				{ name:"shot6", length:180 },
				{ name:"shot2", length:180 },
				{ name:"shot3", length:180 },
				{ name:"shot4", length:180 },
				{ name:"shot5", length:180 },
				{ name:"shot6", length:180 },
				{ name:"shot4", length:180 },
				{ name:"shot5", length:180 },
				{ name:"shot6", length:180 },
				{ name:"shot690", length:280 },
			];

		const shots = <TimelineScroller timelineData={timelineData} />

		return (
			<div id="timeline" style={{backgroundColor:'0xffffff'}}>
				<div id="timeline-header"></div>
				{ shots }
			</div>
		)
	}
}
