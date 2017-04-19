import React from 'react';
import './DeleteButton.css';

const DeleteButton = (props) =>
	<button className='DeleteButton' onClick={ (e) => props.deleteItem(e, props.id)}>
		X
	</button>;

export default DeleteButton;
