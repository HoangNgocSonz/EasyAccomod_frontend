import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import img_slide1 from './img/1.jpg'
import './newsdetail.css'
class NewsDetail extends Component {
    
    render() {
        
        return (
           
                <div className="container News-detail">
     
                        <div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 News-detail-image ">
                                <div className="carousel-item active">
                                    <img src={img_slide1} alt="Phòng trọ đẹp"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 News-detail-content wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="News-detail-content-title">
                                            <p className="News-detail-content-title-typenews"></p>
                                            <h3 className="News-detail-content-title-title"></h3>
                                            <p className="News-detail-content-title-location"></p>
                                        </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9 col-sm-9 col-xs-12 News-detail-content-left wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="col-md-12 col-sm-12 col-xs-12 News-detail-content-table wow fadeInUp" data-wow-delay="0.3s">
                                        <h1 className="News-detail-item">Chi tiết</h1>
                                        <table className="table table-bordered">
                                        <tbody>
                                                <tr>
                                                    <td className="News-detail-content-table-item">Ðịa chỉ</td>
                                                    <td colSpan="3"></td>  
                                                </tr>
                                                <tr>
                                                    <td className="News-detail-content-table-item">Giá:</td>
                                                    <td></td>
                                                    <td className="News-detail-content-table-item">Người đăng:</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td className="News-detail-content-table-item">Diện tích:</td>
                                                    <td></td>
                                                    <td className="News-detail-content-table-item">Số điện thoại:</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td className="News-detail-content-table-item">Loại tin:</td>
                                                    <td></td>
                                                    <td className="News-detail-content-table-item">Số phòng bếp:</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td className="News-detail-content-table-item">Số phòng ngủ:</td>
                                                    <td></td>
                                                    <td className="News-detail-content-table-item">Số phòng tolet:</td>
                                                    <td></td>
                                                </tr>
                                        </tbody>
                                    </table>
                                    </div>  
                           
                                    <div className="col-md-12 col-sm-12 col-xs-12 News-detail-infor wow fadeInUp" data-wow-delay="0.4s">
                                            <h1 className="News-detail-item">Thông tin</h1>
                                            <p className="News-detail-infor-content"></p>
                                    </div>
                                   
                                    <div className="row News-detail-untilities wow fadeInUp" data-wow-delay="0.5s">
                                        <h1 className=" col-md-12 col-sm-12 col-xs-12 News-detail-item">Tiện ích</h1>
                                        <div className="col-md-3 col-sm-3 col-xs-6">
                                            <p className="News-detail-infor-content" ></p>
                                            <p className="News-detail-infor-content"></p>
                                            <p className="News-detail-infor-content"></p>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6">
                                             <p className="News-detail-infor-content"></p>
                                           <p className="News-detail-infor-content"></p>
                                             <p className="News-detail-infor-content"> </p>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6">
                                             <p className="News-detail-infor-content"></p>
                                            <p className="News-detail-infor-content"> </p>
                                             <p className="News-detail-infor-content"></p>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6">
                                            <p className="News-detail-infor-content"></p>
                                            <p className="News-detail-infor-content"></p>
                                            <p className="News-detail-infor-content"></p>
                                        </div>
                                
                                    </div>

                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-12 News-near wow fadeInUp" data-wow-delay="0.7s">
                                     <div className="row News-near-header">
                                         <h6>Tin nổi bật gần đó</h6>
                                     </div>
                                    
                                     </div>
                                     
                                     
                                    

                                </div>
                            </div>
                        </div>
                       </div>
                    );
                       
           
               
        
}
}
    

export default NewsDetail;