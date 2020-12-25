import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./feedback.css";
export default class Feedback extends Component {
    render() {
        return(
     <div id="ModalFeedback" className="" role="dialog">
    
    <div className="modal-dialog">
        
        <div className="modal-content">
            
            <div className="modal-header header">
                <h3>ĐÁNH GIÁ</h3>
              
            </div> 
            <div className="modal-body text-center">
                <h5><strong>Hãy cho chúng tôi biết đánh giá của bạn</strong></h5>
                <hr/>
                <h4>Xếp hạng của bạn</h4>
            </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3">Rất tốt</label> </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3">Tốt</label> </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3">Bình thường</label> </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3">Tệ</label> </div>
            <div className="form-check mb-4"> <input name="feedback" type="radio"/> <label className="ml-3">Rất tệ</label> </div>
          
            <div className="text-center">
                <h4>Đánh giá của bạn</h4>
            </div> <textarea type="textarea" placeholder="Đánh giá" rows="3" class = "textarea"></textarea>
            <div className="modal-footer"> <Link to="" className="btn btn-primary">Gửi  </Link> <Link to="" className="btn btn-outline-primary" data-dismiss="modal">Thoát</Link> </div>
        </div>
    </div>
</div>
        );
    }
}