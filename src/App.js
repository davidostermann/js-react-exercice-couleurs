import React, {Component} from 'react';
import ColorPicker from './Scenes/ColorPicker/ColorPicker';
import SchemePicker from './Scenes/SchemePicker/SchemePicker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  state = {

  }

  render() {

    return (
      <Router>
		  <div>
			  <Route exact path="/" component={ColorPicker}/>
			  <Route path="/schemes" component={SchemePicker}/>
		  </div>
	  </Router>
    );
  }
}

export default App;
