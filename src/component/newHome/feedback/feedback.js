import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./feedback.css";
export default class Feedback extends Component {
  render() {
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
              <input name="feedback" type="radio" />{" "}
              <label className="ml-3">Rất tốt</label>{" "}
            </div>
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" />{" "}
              <label className="ml-3">Tốt</label>{" "}
            </div>
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" />{" "}
              <label className="ml-3">Bình thường</label>{" "}
            </div>
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" />{" "}
              <label className="ml-3">Tệ</label>{" "}
            </div>
            <div className="form-check mb-4">
              {" "}
              <input name="feedback" type="radio" />{" "}
              <label className="ml-3">Rất tệ</label>{" "}
            </div>
            {/* <textarea
              type="textarea"
              //   placeholder="Đánh giá"
              rows="3"
              class="textarea"
            ></textarea> */}
            <div className="modal-footer-x">
              <div className="submitFeedback"></div> Gửi đánh giá
            </div>
          </div>
        </div>
      </div>
    );
  }
}
