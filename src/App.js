import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from './component/header/header';
import Login from './component/login__register/login/login';
import LoginRegister from './component/login__register/login__register';
import SlideHeader from './component/header/slide_header/slide_header';
import { Slide } from '@material-ui/core';
import Footer from './component/footer/footer';
class App extends Component {
  render() {  
        return (
            <div className="App">
                <Router>
                    <div>
                        <Header/>
                        <Footer/>
                    </div>
                </Router>
            </div>  
    );
  }
}
export default App;
