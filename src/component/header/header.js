import React, {Component} from "react";
import "./header.css";
import SlideHeader from './slide_header/slide_header';

class Header extends Component {
    render(){
        return(
            <div>
                <div className = "container-fluid">
                    <div className = "row header2">
                        {!this.props.stateFiterandslide_imgApp &&
                            <div className="row header_slide">
                                <SlideHeader/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;