import React, { Component } from "react";
import "./report_news.css"

class Report extends Component{
    render(){
        return(
            <div className = "report">
                <h4 style = {{textAlign:'center'}}>BÁO CÁO</h4>
                <form>
                    <input id = "borrowed" type = "radio" name = "baocao" value = "1"></input>
                    <label for ="borrowed" className = "radio" style={{marginRight: '20px', fontSize:'15px'}}>Đã cho thuê
                        <span className = "checkround"></span>
                    </label>
                    <input id = "error" type = "radio" name = "baocao" value = "2"/>
                    <label for = "error" className = "radio">Sai thông tin
                        <span className = "checkround"></span>
                    </label><br/>
                    <button className="btn btn-danger">Gửi báo cáo</button>
                </form>
            </div>
        )
    }
}
export default Report;