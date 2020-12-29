import React, { Component } from "react";
import "./Admin2.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../menu/Navbar";
import Filter from "../header/filter/filter";
import Inforuser from "../newHome/infor_user/infor_user";
import ChangePassword from "../newHome/change_password/change_password";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      userOwner: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://accomod.herokuapp.com/api/user`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          listUser: res.data.data,
          userOwner: res.data.data
            .filter((contentAdmin) => contentAdmin.position.includes("owner"))
            .map((owner) => (
              <div>
                <Row>
                  <Col xs={4} sm={4}>
                    <span className="contentAdmin2">{owner._id}</span>
                  </Col>
                  <Col xs={2} sm={2}>
                    <span className="contentAdmin2">{owner.userName}</span>
                  </Col>
                  <Col xs={3} sm={3}>
                    <span className="contentAdmin2">
                      {owner.soChungMinhThu}
                    </span>
                  </Col>
                  <Col xs={3} sm={3}>
                    <span className="contentAdmin2">
                      {" "}
                      {owner.status == "chưa duyệt" ? (
                        <button>duyet</button>
                      ) : (
                        "đã duyệt"
                      )}
                    </span>
                  </Col>
                </Row>
              </div>
            )),
        });
      })
      .catch((err) => console.log("errrr: " + err));
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={4} sm={4}>
              ID
            </Col>
            <Col xs={2} sm={2}>
              Tên đăng nhập
            </Col>
            <Col xs={3} sm={3}>
              Số căn cước
            </Col>
            <Col xs={3} sm={3}>
              Trạng thái
            </Col>
          </Row>
          {this.state.listUser.length != 0 ? this.state.userOwner : ""}
        </Container>
      </div>
    );
  }
}
