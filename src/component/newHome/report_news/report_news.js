import React, { Component } from "react";
import "./report_news.css"

class Report extends Component{
    render(){
        return(
            <div className = "report">
                <h4>BÁO CÁO</h4>
                <form>
                    <input type = "radio" checked></input>
                    <label className = "radio" style={{marginRight: '20px'}}>Đã cho thuê
                        <span className = "checkround"></span>
                    </label>
                    <input type = "radio"/>
                    <label className = "radio">Sai thông tin
                        <span className = "checkround"></span>
                    </label><br/>
                    <button className="btn btn-danger">Gửi báo cáo</button>
                </form>
            </div>
        )
    }
}
export default Report;