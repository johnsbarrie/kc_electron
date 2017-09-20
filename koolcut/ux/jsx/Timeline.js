'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Shot from './Shot';

export default class Timeline extends React.Component {
	render () {
		const shotsData = [
				{ name:"shot1", length:4 },
				{ name:"shot2", length:180 },
				{ name:"shot3", length:180 },
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
				{ name:"looppp", length:280 },
			];

		const shots = <Shots shots={shotsData} />

		return (
			<div id="timeline" style={{backgroundColor:'0xffffff'}}>
				<div id="timeline-header"></div>
				{ shots }
			</div>
		)
	}
}

class Shots extends React.Component {

	onMouseUpHandler(e){
		console.log(e.clientX);
	}

	render () {
		const children = this.props.shots.map(function (shot, index){
			return (<Shot key={index} shot={shot}/>);
		});

		return(<div id="timeline-content" onMouseUp={(e) => this.onMouseUpHandler(e)}>{children}</div>);
	}
}
