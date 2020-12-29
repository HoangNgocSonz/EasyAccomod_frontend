import React, { Component } from "react";
import "./ManageUser.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../menu/Navbar";
export default class ManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      userOwner: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://accomod.herokuapp.com/api/post`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          listUser: res.data.data,
          userOwner: res.data.data
            // .filter((contentAdmin) => contentAdmin.position.includes("owner"))
            .map((owner) => (
              <div className="rowAdmin2">
                <Row>
                  <Col xs={4} sm={4}>
                    <span className="contentAdmin2">{owner._id}</span>
                  </Col>
                  <Col xs={5} sm={5}>
                    <span className="contentAdmin2">{owner.title}</span>
                  </Col>
                  <Col xs={3} sm={3}>
                    <span
                      className="deleteItem"
                      onClick={() => this.updateStatus(owner._id)}
                    >
                      Xóa
                    </span>
                  </Col>
                </Row>
              </div>
            )),
        });
      })
      .catch((err) => console.log("errrr: " + err));
  }
  updateStatus(id) {
    console.log(id);
    axios
      .delete(`https://accomod.herokuapp.com/api/post/${id}`)
      .then((res) => {
        console.log(res.data.data);
        window.location.reload();
      })
      .catch((err) => console.log("errrr: " + err));
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="quan_ly_chu_tro">
          <Container>
            <div class="titleAdmin2">
              <Row>
                <Col xs={4} sm={4}>
                  ID
                </Col>
                <Col xs={5} sm={5}>
                  Tiêu đề
                </Col>
                <Col xs={3} sm={3}>
                  Trạng thái
                </Col>
              </Row>
            </div>

            {this.state.listUser.length != 0 ? this.state.userOwner : ""}
          </Container>
        </div>
      </div>
    );
  }
}
