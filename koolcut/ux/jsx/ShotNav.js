'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ShotTree from './ShotTree';
export default class ShotNav extends React.Component {

	render () {
		return (
      <div id='shot-nav'>
        <div id='shot-nav-content'>
					<ShotTree navigationMaps={this.props.navigationMaps}/>
				</div>
        <div id='footer'></div>
      </div>
		)
	}
}
