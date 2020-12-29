import React, { Component } from "react";
import "./report_news.css"

class Report extends Component{
    constructor(props) {
        super(props);
        this.state = {
        baocao:false,
         message:'',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event) {
        if(!this.state.baocao){
          this.setState({
            message:'Chưa chọn lỗi!!!'
          })
         
        }
        else {
          this.setState({
            message:'Đã gửi báo cáo!!!'
          })
        }
      }
        
    render(){
        var KTL = true;
        if (this.state.message.length > 0) {
          KTL = false;
        }
        return(
            <div className = "report">
                <h4 style = {{textAlign:'center', fontWeight:"bold", fontSize: "20px"}}>Báo cáo</h4>
                {!KTL && (
                <p className="error_message-feedback">{this.state.message}</p>
              )}
                <form>
                    <label for ="borrowed" className = "radio" /*style={{marginRight: '20px', fontSize:'15px'}}*/>Phòng trọ đã cho thuê
                        <input id = "borrowed" type = "radio" name = "baocao" value = {this.state.baocao} onChange={this.handleInputChange}></input>
                        <span className = "checkround"></span>
                    </label>
                    <label for = "error" className = "radio">Sai thông tin
                        <input id = "error" type = "radio" name = "baocao" value = {this.state.baocao} onChange={this.handleInputChange}/>
                        <span className = "checkround"></span>
                    </label><br/>
                    {/* <button className="btn btn-danger" value="Gửi báo cáo" onClick={this.handleSubmit}>Gửi báo cáo</button> */}
                    <input type="button" className="btn btn-dange submitReport" value="Gửi báo cáo" onClick={this.handleSubmit}/>
                </form>
                
            </div>
        )
    }
}
export default Report;