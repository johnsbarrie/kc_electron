'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames'

export default class TimelineShot extends React.Component {
	constructor(){
		super();
		this.mouseDown=false;
		this.clicked = false;
	}

	onMouseEnterHandler(){
		//this.props.shot.length += 10;
		//this.forceUpdate();
		this.hovered = true;
		this.forceUpdate();
	}

	onMouseLeaveHandler(){
		this.hovered = false;
		this.forceUpdate();
	}

	onMouseMoveHandler(e){
		if(this.mouseDown){
			this.dragging = true;
			this.forceUpdate();
		}
	}

	onMouseDownHandler(e){
		this.mouseDown = true;
		//console.log("this.mouseDown ",this.mouseDown);
		this.forceUpdate();

		//console.log('shot', e.currentTarget.offsetLeft);
		//console.log("onMouseDownHandler ", e.currentTarget.clientX, e.pageX);
	}

	onMouseUpHandler(e){
		this.dragging = false
		this.mouseDown = false;
		this.selected = !this.selected;
		this.forceUpdate();
		// e.target.parentNode.scrollLeft = e.target.parentNode.scrollLeft+ 10;
	}

	render(){
		const shotClasses = (this.dragging && !this.props.clearDownState)
			? classnames({ 'timeline-shot-dragging':this.dragging  })
			: classnames(
				{'timeline-shot': true,
				'timeline-shot-selected':(this.selected|| this.hovered),
				'show': this.dragging
			})

		const name = this.props.shot.name;
		const length = this.props.shot.length;

		return(<div title={name} onMouseUp={(e)=> this.onMouseUpHandler(e)} onMouseDown={(e)=> this.onMouseDownHandler(e)} onMouseMove= {(e)=> this.onMouseMoveHandler(e)} onMouseEnter= {(e)=>this.onMouseEnterHandler(e)} onMouseLeave= {(e)=>this.onMouseLeaveHandler(e)} className={shotClasses} style={{width:length}}><label className='shot-title'>{name}</label></div>);
	}
}
