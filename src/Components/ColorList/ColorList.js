import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ColorList.css';

const ColorList = (props) =>
		<ul className="ColorList">
			{props.colors.map((item, i) =>
				<ListItem
					key={i}
					id={item.id}
					color={item.color}
					name={item.name}
					changeColor={props.changeColor}
				/>
			)}
		</ul>;

export default ColorList;
