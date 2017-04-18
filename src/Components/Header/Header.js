import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = (props) => {
	return (
		<div className="App-header" style={props.objStyle}>
		  <img src={logo} className="App-logo" alt="logo"/>
		  <div>
			<i className='fa fa-arrow-up'></i>
		  </div>
		  <h1>This logo is not a button anymore..</h1>
		</div>
	)
};

export default Header;
