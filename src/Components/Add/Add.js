import React from 'react';
import InputForm from '../InputForm/InputForm';
// import {ChromePicker} from 'react-color';
import './Add.css';

const Add = (props) =>
<form
	className='Add'
	onSubmit={props.addNewcolor}
	style={{ borderColor: props.color }}>
  <p>
	Add a new color :
  </p>
	  <InputForm
		  color={props.color}
		  name='newColorName'
		  labelValue='Name'
		  addNewcolor={props.addNewcolor}
		  changeNewColor={props.changeNewColor}
		  newColorName={props.newColorName}
		  newColorColor={props.newColorColor}
	  />
	  <InputForm
		  color={props.color}
		  name='newColorColor'
		  labelValue='Color'
		  addNewcolor={props.addNewcolor}
		  changeNewColor={props.changeNewColor}
		  newColorName={props.newColorName}
		  newColorColor={props.newColorColor}
	  />
  {/* <ChromePicker
	  onChangeComplete={this.changeColorPicker}
  /> */}
  <button
	  type='submit'
	  style={{ color: props.color }}
  >
	  Add new color !
  </button>
</form>;

export default Add;
