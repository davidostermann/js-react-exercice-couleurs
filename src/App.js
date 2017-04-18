import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';
import './App.css';
// import {ChromePicker} from 'react-color';
import Header from './Components/Header/Header';
import ColorList from './Components/ColorList/ColorList';
import Add from './Components/Add/Add';
import Footer from './Components/Footer/Footer';

class App extends Component {
  state = {
      // Set the main Style
    objStyle: {
      backgroundColor: '#edb31c'
      },
      colors : [
                { id: 1, name: 'violet', color: '#f5aafb'},
                { id: 2, name: 'marin blue', color: '#2b4d99'},
				{ id: 3, name: 'pale green', color: '#aafbde'},
				{ id: 4, name: 'vermillon', color: '#fe532e'},
				{ id: 5, name: 'sky blue', color: '#82c4fa'},
				{ id: 6, name: 'salmon', color: '#fb8b8b'}
      ],
      newColorName: '',
      newColorColor: ''
    };


  changeColor = (color) => {
    this.setState({
      objStyle: {
        backgroundColor: color
      }
    });
  }

  changeNewColor = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  changeColorPicker = (color, event ) => {
    this.setState({newColorColor: color.hex});
  }

  addNewcolor = (e) => {
    e.preventDefault();
    const newColorMade = {
      id: this.state.colors.length + 1,
      name: this.state.newColorName,
      color: this.state.newColorColor
    };
    this.setState({
      colors : [...this.state.colors, newColorMade],
      newColorName: '',
      newColorColor: ''
    });
  };

  addRandomColor = (e) => {
	e.preventDefault();
	const hexValues = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e'];
	const newHexColorArr = [];
	for (let i = 0; i < 6; i++) {
		let newValue = hexValues[Math.floor(Math.random() * hexValues.length)];
		newHexColorArr.push(newValue);
	}
	const newHexColor = newHexColorArr.join('');
	this.setState({
		newColorColor : `#${newHexColor}`
	});

	var myHeaders = new Headers();

	var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };

	fetchJsonp(`http://thecolorapi.com/id?hex=${newHexColor}`, myInit)
	.then( res => {
		return res.json();
	})
	.then( color => {
		this.setState({
			newColorName: color.name.value
		});
	})
	.catch(err => {
		console.log(err);
	})
  }

  render() {
    return (
      <div className="App">
		<Header objStyle={this.state.objStyle}/>
        <section>

          <h2 style={{
            color: this.state.objStyle.backgroundColor
          }} className="App-intro">
            Change the style by clicking the buttons there !
          </h2>
          <div>
            <i className="fa fa-arrow-down" style={{
              color: this.state.objStyle.backgroundColor
            }}></i>
          </div>

          {/* BUTTONS LIST */}
			<ColorList
				colors={this.state.colors}
				changeColor={this.changeColor}
			/>

          {/* FORM TO ADD BUTTONS */}
			<Add
				color={this.state.objStyle.backgroundColor}
				addNewcolor={this.addNewcolor}
				changeNewColor={this.changeNewColor}
				newColorName={this.state.newColorName}
				newColorColor={this.state.newColorColor}
			/>
			<button
			  onClick={this.addRandomColor}
			>
			  Random Color
			</button>
        </section>

	<Footer color={this.state.objStyle}/>
</div>
    );
  }
}

export default App;
