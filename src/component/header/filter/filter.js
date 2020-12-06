import React, { Component } from 'react';
import axios from 'axios';
import './filter.css'


import Slider from '@material-ui/core/Slider';
class Filter extends Component {
    render(){
        return (
<div className="advanced-search-form" >
                 <div className="search-title" id="Find_News">
                     Tìm kiếm 
                 </div>
                 <div className="row" >
                    <div className="col-md-3 col-sm-4 col-xs-12 select_item">
                        <select className="form-control nice-select wide select_item" 
                        >
                                    <option data-display="Thể loại" value="0" >Tất cả</option>
                                    <option value="1">Thuê Phòng Trọ</option>
                                    <option value="2">Thuê Nhà Trọ</option>
                                    <option value="3">Thuê Căn Hộ</option>
                        </select>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="form-group">
                            <select className="form-control nice-select wide select_item" name="Haha" onChange={e=>this.submitClickCity(e)}>
                                      <option value='0'>-- Chọn Tỉnh/Thành Phố --</option>
                                      
                                    {/* { 
                                      this.state.citys.map((item,index)=>
                                        <option key={index} value={item.code} >{item.name}</option>)
                                    } */}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="form-group">
                            <select className="form-control nice-select wide select_item" onChange={e=>this.sumitClickDictrict(e)}>
                                            <option value='0'>-- Chọn Quận/Huyện --</option>
                                            {/* {
                                                this.state.districts.map((item,index)=>
                                                    <option key={index} value={item.code} >{item.typename}</option>
                                                )
                                            } */}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="form-group">
                                <select className="form-control nice-select wide select_item" onChange={e=>this.sumitClickStreet(e)}>
                                            <option value='0'>-- Chọn Tên Đường --</option>
                                            {/* {
                                            this.state.streets.map((item,index)=>
                                                <option key={index} value={item.code}>{item.typename}</option>
                                            )
                                            } */}
                                </select>
                        </div>
                    </div>
                 </div>
                 <div className="row">
                       
                        <div className="col-md-6 col-sm-6 col-xs-12">
                                <Slider
                                max={50}
                                min={0}
                                
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"/>

                                <label className="range">Giá tiền</label>
                                
                            
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                                <Slider
                                 max={200}
                                 min={0}
                               
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"/>
                                
                                <label className="range">Diện tích</label>
                        </div>


                 </div>
                 <div className="row find_home">
                        <input className="bnt_find" type="button" value="Tìm Kiếm" onClick={e=>this.ClickFilter(e)}/>
                 </div>
            </div>
        );
    }
}
export default Filter;