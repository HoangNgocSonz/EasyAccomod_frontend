import React, { Component } from "react";
import './new_news.css'

class NewsHome extends Component{
    render(){
        return(
            <div className="container-fluid newshome">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 tieudepage_mg">
                        <h2 className="tieudepage_mg-h2">Đăng tin phòng trọ</h2>
                        <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
                    </div>
                </div>
                <div className="ggmappage wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 ggmappage_mg">
                            <h2 className="ggmappage_mg-h2" >Địa chỉ cho thuê</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="form-group">
                                <select className="form-control nice-select wide select_item" name="Haha">
                                    <option value='0' name="0">-- Chọn Tỉnh/Thành Phố --</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="form-group">
                                <select className="form-control nice-select wide select_item" >
                                    <option value='0'>-- Chọn Quận/Huyện --</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                                <div className="form-group">
                                    <select className="form-control nice-select wide select_item">
                                        <option value='0'>-- Chọn Tên Đường --</option>
                                    </select>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsHome;