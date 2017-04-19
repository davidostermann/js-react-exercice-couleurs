import React from 'react';
import './ListItem.css';
import DeleteButton from './../DeleteButton/DeleteButton';

const ListItem = (props) =>
		<li className='ListItem'
			style={{ backgroundColor: props.color }}
			onClick={() => props.changeColor(props.color)}
		>
			{props.name}
			<DeleteButton id={props.id} deleteItem={props.deleteItem}/>
		</li>;

export default ListItem;
