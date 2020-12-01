import React, { Component } from 'react';
import './App.css';
import Header from "./component/header/header";
import SlideHeader from "./component/header/slide_header/slide_header"

/*import Navbar from "./component/Navbar";
import Register from "./component/register";
import Login from "./component/login";*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        stateFiterandslide_img:false
    }
  }
  render(){
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
  
}
export default App;
