import React, {Component} from "react";
import banner1 from '../image_header/1.jpg'
import banner2 from '../image_header/2.jpg'
import banner3 from '../image_header/3.jpg'


class SlideHeader extends Component{
    render(){
        return(
            <div id = "demo" className = "carousel silde" data-ride = "carousel">
                {/*The slideshow*/}
                <div class = "carousel-inner">
                    <div className = "carousel-item active">
                        <img src = {banner1} alt = "Title" className = "carousel-item_img"/>
                    </div>
                    <div className = "carousel-item">
                        <img src = {banner2} alt = "Penhouse" className = "carousel-item_img"/>
                    </div>
                    <div className = "carousel-item">
                        <img src = {banner3} alt = "VietNam" className = "carousel-item_img"/>
                    </div>
                </div>
                {/*Left and right control */}
                <a className = "carousel-control-prev" href = '#demo' data-silde = "prev">
                    <div className="prev_backgroups">
                        <span className="carousel-control-prev-icon" />
                        <span class="sr-only">Previous</span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <div className="next_backgroups">
                        <span className="carousel-control-next-icon"/>
                        <span class="sr-only">Next</span>
                    </div>
                </a>
            </div>
            
        )
    }
}
export default SlideHeader;