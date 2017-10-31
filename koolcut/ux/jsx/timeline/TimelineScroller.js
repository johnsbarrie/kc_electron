'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames'
import TimelineShot from './TimelineShot';

export default class Shots extends React.Component {
	constructor() {
		super();
		this.mousePositionX = 0;
		this.mousePositionY = 0;
		this.downState=false
	}

	onMouseLeaveHandler(e){
		//console.log('onMouseLeaveHandler')
		if (this.mouseDown) {
			this.downState=true;
			this.mouseDown = false;
			this.dragPosition(e);
			this.forceUpdate();
		}
	}

	onMouseDownHandler(e){
		this.downState=false;
    this.mouseDown = true;
		this.dragPosition(e);
	}

  onMouseMoveHandler(e){
    if (this.mouseDown) {
			this.dragPosition(e);
		  // console.log("onMouseMoveHandler ", this.mousePositionX, this.refs.shotsHolder.scrollLeft);
			this.refs.timelinecursor.style.left = this.mousePositionX+'px';
			this.refs.timelinecursor.style.top = this.mousePositionY+'px';
			//console.log("timelinecursor ",this.refs.timelinecursor.left);
			this.forceUpdate();
    }
	}

  onMouseUpHandler(e){
    this.mouseDown = false;
		this.dragPosition(e);
	}

	onScrollHandler(e){
		this.dragPosition(e);
	}

	dragPosition(e){
		if (e.clientX) {
			//console.log(this.mousePositionY, e.clientY, e.screenY)
			this.mousePositionY = 0;//e.clientY - this.refs.timelinecontent.getBoundingClientRect().top;
			this.mousePositionX = e.clientX  + this.refs.timelinecontent.scrollLeft;
		}
		//console.log("dragPosition X", this.mousePositionX + this.refs.timelinecontent.scrollLeft, this.mousePositionY, this.refs.timelineScroller.style.top);
		console.log("dragPosition Y",  this.mousePositionX, this.mousePositionY );
	}

	render () {
		const downState = this.downState;
		const children = this.props.timelineData.map(function (shot, index){
			return (<TimelineShot key={index} shot={shot} clearDownState={ downState }/>);
		});

		return(<div id="timeline-scroller" ref="timelineScroller"
		 						onMouseMove={(e) => this.onMouseMoveHandler(e)}
								onScroll={(e) => this.onScrollHandler(e)}
								onMouseUp={(e) => this.onMouseUpHandler(e)}
								onMouseLeave={(e) =>this.onMouseLeaveHandler(e)}
								onMouseDown={(e) => this.onMouseDownHandler(e)}>
        		<div id="timeline-content" ref="timelinecontent">
          		{children}
        		</div>
        		<div id="timeline-cursor show" ref="timelinecursor"> </div>

      		</div>);
	}
}
