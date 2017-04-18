import React from 'react';

const InputForm = (props) =>
	<p>
		<label>{props.labelValue} :</label>
		<input
		  type="text"
		  name={props.name}
		  style={{color: props.color}}
		  onChange={props.changeNewColor}
		  value={props.name === 'newColorName' ? props.newColorName : props.newColorColor }
		/>
	</p>;

export default InputForm;
