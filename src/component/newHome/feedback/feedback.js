import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./feedback.css";
export default class Feedback extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   veryGood: true,
  //   Good:false,
  //   normal:false,
  //   veryBad:false,
  //   Bad:false,
  //    message:'',
  //   };
  //   async componentDidMount(){
  //     await  axios.get("/nguoi-dung/gui-danh-gia")
  //     .then(res => {
  //         this.setState({
  //           

  //         })
  //     })
  //     .catch( (error) => console.log(error));
  // }
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // }
  // handleSubmit(event) {
  //   let feedback = this.state;
  //   if(feedback){
  //     this.setState({
  //       message:'Chọn đánh giá trước khi gửi!'
  //     })
     
  //   }
  //   else {
  //     this.setState({
  //       message:'Đã gửi đánh giá!'
  //     })
  //   }
    
  //   // this.setState({
  //   //       message:'Đã gửi đánh giá!'
  //   //     })
    
  // }
  render() {
    // var KTL = true;
    // if (this.state.message.length > 0) {
    //   KTL = false;
    // }
    return (
      <div id="ModalFeedback" className="feedBackLeft" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header header">
              <h4
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
                className="feedback"
              >
                Đánh giá bài viết
              </h4>
              {/* {!KTL && (
                <p className="error_message-feedback">{this.state.message}</p>
              )} */}
              <div className="rating"> <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
              </div>
               
            </div>
            {/* <div className="modal-body text-center">
              <h5>
                <strong>Hãy cho chúng tôi biết đánh giá của bạn</strong>
              </h5>
              <hr />
              <h4>Xếp hạng của bạn</h4>
            </div> */}
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" ref="veryGood" onChange={this.handleInputChange}/>{" "}
              <label className="ml-3">Rất tốt</label>{" "}
            </div>
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" ref="Good" onChange={this.handleInputChange}/>{" "}
              <label className="ml-3">Tốt</label>{" "}
            </div>
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" ref="normal" onChange={this.handleInputChange}/>{" "}
              <label className="ml-3">Bình thường</label>{" "}
            </div>
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" ref="Bad" onChange={this.handleInputChange}/>{" "}
              <label className="ml-3">Tệ</label>{" "}
            </div>
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" ref="veryBad" onChange={this.handleInputChange}/>{" "}
              <label className="ml-3">Rất tệ</label>{" "}
            </div>
            {/* <textarea
              type="textarea"
              //   placeholder="Đánh giá"
              rows="3"
              class="textarea"
            ></textarea> */}
          
          <input type="button" className=" submitFeedback" value="Gửi đánh giá" onClick={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}
