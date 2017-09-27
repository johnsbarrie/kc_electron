'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Shot extends React.Component {
	constructor(){
		super();
		this.mouseDown=false;
	}

	onMouseEnterHandler(){
		//this.props.shot.length += 10;
		this.forceUpdate();
	}

	onMouseLeaveHandler(){

	}

	onMouseMoveHandler(e){

	}

	onMouseDownHandler(e){
		this.mouseDown = true;
		console.log('shot', e.currentTarget.offsetLeft);
		//console.log("onMouseDownHandler ", e.currentTarget.clientX, e.pageX);
	}

	onMouseUpHandler(e){
		this.mouseDown = false;
		//e.target.parentNode.scrollLeft = e.target.parentNode.scrollLeft+ 10;
	}

	render(){
		const name = this.props.shot.name;
		const length = this.props.shot.length;

		return(<div title={name}  onMouseUp={(e)=> this.onMouseUpHandler(e)} onMouseDown={(e)=> this.onMouseDownHandler(e)} onMouseMove= {(e)=> this.onMouseMoveHandler(e)} onMouseEnter= {(e)=>this.onMouseEnterHandler(e)} onMouseLeave= {this.onMouseLeaveHandler} className='timeline-shot' style={{width:length}}><div className='shot-title'>{name}</div></div>);
	}
}
