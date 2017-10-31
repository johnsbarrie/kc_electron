'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class ShotTree extends React.Component {
	render () {
		let films = this.props.navigationMaps[0].map((film, index)=>{
      return <Film key={index} film={film} filmClicked={ this.filmClicked }/>
    });

		return (
      <div className='nav-films-bin'>{films}</div>
		)
	}
}

class Film extends React.Component{
  constructor() {
    super();
    this.open = true;
    this.state = {shotbincss: 'nav-shots-bin'};
  }

  handleClick(evt) {
    this.open = !this.open;
    var binclass = (this.open) ? 'nav-shots-bin' : 'nav-shots-bin-closed'
    this.setState({shotbincss: binclass});
  }

  render () {
		const shots = <Shots shots={this.props.film.shots} openCSS={this.state.shotbincss} />;
  	return (
      <div className='nav-film'>
        <div className='nav-film-name' onClick={ () =>this.handleClick() } > { this.props.film.name } </div>
        { shots }
      </div>
  	)
  }
}

function Shots ({shots, openCSS}) {
	const shotsComps = shots.map(function(shot, index) {
		return (<div className='nav-shot' key={ index }>{shot.name}</div>);
	});
  return (<div className={ openCSS }>{shotsComps} </div>);
}

function Shot (shot){
  return(<div/>);
}
