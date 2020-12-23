import React, { Component } from "react";
import "./report_news.css"

class Report extends Component{
    render(){
        return(
            <div className = "report">
                <h4 style = {{textAlign:'center', fontWeight:"bold", fontSize: "30px"}}>BÁO CÁO</h4>
                <form>
                    <label for ="borrowed" className = "radio" /*style={{marginRight: '20px', fontSize:'15px'}}*/>Phòng trọ đã cho thuê
                        <input id = "borrowed" type = "radio" name = "baocao" value = "1"></input>
                        <span className = "checkround"></span>
                    </label>
                    <label for = "error" className = "radio">Sai thông tin của phòng trọ
                        <input id = "error" type = "radio" name = "baocao" value = "2"/>
                        <span className = "checkround"></span>
                    </label><br/>
                    <button className="btn btn-danger">Gửi báo cáo</button>
                </form>
            </div>
        )
    }
}
export default Report;