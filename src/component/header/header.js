import React, {Component} from "react";
import "./header.css";
import LoginRegister from '../login_register/login_register';
import SlideHeader from './slide_header/slide_header';

class Header extends Component {
    render(){
        return(
            <div>
                <div className = "container-fluid">
                    <div className="row header1">
                        <div className="col-md-6 col-sm-6 col-xs-6 header1_info_right">
                            <LoginRegister/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;