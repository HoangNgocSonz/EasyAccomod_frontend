import React, {Component} from 'react';
import img_icon_menu from '../header/image_header/icons_menu.png'
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrolled: false
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            const isTop = window.scrollY < 50;
            if(isTop !==true) {
                this.setState({
                    scrolled:true
                })
            }
            else this.setState({scrolled:false})
        });
    }
    render(){
        return(
            <div className = "col-md-12 col-sm-12 col-xs-12 header2-menu">
                <nav className = {!this.state.scrolled ? "navbar navbar-expand-lg header2-menu-nav":"navbar navbar-expand-lg header2-menu-nav-fixed"}>
                    <p className = "navbar-brand">PhongTroVN</p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <img src={img_icon_menu} alt="icomn_menu"></img>
                        </span>
                    </button> 
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <p className="nav-link header2-menu-nav-item" >Trang chủ</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link header2-menu-nav-item" >Thuê Phòng trọ</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link header2-menu-nav-item" >Thuê nhà nguyên căn</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link header2-menu-nav-item">Thuê căn hộ</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link header2-menu-nav-item">Liên hệ</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Menu;