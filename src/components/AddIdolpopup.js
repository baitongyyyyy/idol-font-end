import React from "react";
import { Modal, Row, Col, Button, Form, InputGroup, ListGroup, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addModal, checkLogin } from "../redux/actions";
import api from '../redux/api';
import helper from "../redux/helper"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const API = api.getAPI();
const MySwal = withReactContent(Swal)
class AddIdolpopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      platform: 'ig',
      addidolList: [],
      igname: '',
      igSelect: '',
      isIgSelect: false,
      igUser: [],
      selectButton: false,
      engRate: '',
    };
  }

  async componentDidMount() {
    if (this.props.login) {
      await API.connectTokenAPI(this.props.login.accessToken);
    }

    await this.props.checkLogin();
    this.getIdolIns()
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.login != prevProps.login && this.props.login) {
      await API.connectTokenAPI(this.props.login.accessToken);
    }
  }
  onHide = () => {
    console.log(this.state)
    this.props.openModal(false);
  };

  getIdolIns = async () => {
    // console.log(username)
    let response;
    try {
      response = await API.getIdolInstagram(this.state.igname)
    } catch (error) {
      response = error.response
    }
    if (response && response.status != 500) {
      if (response.status == 200) {
        this.setState({ addidolList: response.data })
        // console.log("list", this.state.addidolList)
      } else {
        console.log(response.data.message)
      }
    }
  }

  getIgUser = async (id) => {
    // console.log('--->',id)
    let response;
    try {
      response = await API.getIgUser(id)
    } catch (error) {
      response = error.response
    }
    if (response && response.status != 500) {
      if (response.status == 200) {
        this.setState({ igUser: response.data, engRate: response.data.engagement_rate.toFixed(2) })
      } else {
        console.log(response.data.message)
      }
    }
  }

  saveIdol = async (type) => {
    // console.log(username)
    const { igUser } = this.state
    let data = igUser;
    let response;
    // return;
    const params = JSON.stringify({
      "social_platform": "IG",
      "username": data.username,
      "profile_pic_url": data.profile_pic_url,
      "ig_pk": data.pk,
      "follower_count": data.follower_count,
      "engagement_rate": data.engagement_rate
    });
    try {
      response = await API.addIdolIg(params)
      console.log("response", response);
    } catch (error) {
      response = error.response
    }
    if (response && response.status != 500) {
      if (response.status == 201) {
        if (type == 1) {
          await this.setState({ isIgSelect: false, igSelect: '', igUser: [], igname: '', selectButton: false })
          this.props.openModal(false);
          MySwal.fire({
            icon: "success",
            title: "Success",
          }).then((value) => {
            window.location.href = '/idol-list';
          });
        } else {
          this.openAddIdol()
        }
      } else {
        MySwal.fire({
          customClass: 'swal-wide',
          icon: "error",
          title: "Error",
          text: "Profile has already been added."
        })
        console.log(response.data.message)
      }
    }
  }

  openAddIdol = async () => {
    await this.setState({ isIgSelect: false, igSelect: '', igUser: [], igname: '', selectButton: false })
    this.props.openModal(true);
  }

  render() {
    const { show } = this.props;
    const { igUser,isIgSelect,platform,addidolList,igSelect,selectButton,engRate } = this.state;
    return (
      <Modal
        show={show}
        onHide={this.onHide}
        size="md"
        // id="login-form"
        // aria-labelledby="contained-modal-title-vcenter-l"
        centered
      >
        <Modal.Header className="modal-header-regis pb-1 ">
          <Modal.Title id="register-modal" className="ml-2 color-black font-16">Add Social Platform</Modal.Title>
        </Modal.Header>
        <Row className="position m-0">
          <Col className="pb-3 text-center">
            {/* <img src={process.env.NEXT_PUBLIC_HOST_URL + "/image/check.png"} className="img-fluid" alt="logo-registerPopup" /> */}
          </Col>
        </Row>
        <Row className="ml-4 m-0">
          <div className="justify-content-center mr-2" >
            <Form.Check
              inline
              type="radio"
              checked={platform === 'ig'}
              // label="Instagram"
              className="m-0"
              name="platforms"
              id="platform"
              value="ig"
              onChange={() => { this.setState({ platform: 'ig' }) }}
            />
            <img
              width="35px"
              height="25px"
              className="pr-2"
              src={window.location.origin + "/image/instagram.png"}
            />
            <label className="mr-2">Instagram</label>
          </div>
          <div className="justify-content-center">
            <Form.Check
              inline
              type="radio"
              // label="Facebook"
              className="m-0"
              name="platforms"
              id="platform"
              value="fb"
              onChange={() => { this.setState({ platform: 'fb' }) }}
            />
            <img
              width="35px"
              height="25px"
              className="pr-2"
              src={window.location.origin + "/image/facebook.png"}
            />
            <label className="mr-2">Facebook</label>
          </div>
        </Row>
        {platform === 'ig' ? (
          <Row className="m-0">
            <Col className="p-2 margin-text-input">
              <label className="color-gray">
                Instagram Profile

              </label>
              <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                Username
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Instagram Name"
                  value={this.state.igname}
                  onChange={(e) => {
                    // this.getIdolIns(e.target.value)
                    let name = e.target.value;
                    this.setState({ igname: name })
                    setTimeout(() => { this.getIdolIns() }, 1000)
                    if (name) {
                      this.setState({ isIgSelect: true })
                    } else {
                      this.setState({ isIgSelect: false })
                    }
                  }}
                // onKeyPress={(e) => {
                //   if (e.charCode == 13) {
                //     this.getIdolIns()
                //     this.setState({ isIgSelect: false })
                //   }
                // }} 
                />

              </InputGroup>
              {
                isIgSelect ?
                  <div className="h-ig">
                    <Row className="p-0 m-0">
                      <Col className="p-0 m-0">
                        <ListGroup className="list-g">
                          {
                            addidolList.map((item, index) => {
                              return (
                                <ListGroup.Item key={index} className="list-g"
                                  onClick={() => {
                                    this.setState({ igSelect: item, isIgSelect: false, selectButton: true })
                                    this.getIgUser(item.pk)
                                  }}>
                                  <img className="px-1 img-profile" src={item.profile_pic_url} />{item.username}
                                </ListGroup.Item>
                              )
                            })
                          }
                        </ListGroup>
                      </Col>
                    </Row>
                  </div>
                  : ''
              }
              {igSelect !== '' &&
                <Card className="bg-card">
                  <Card.Header className="card-ig">
                    <img width="70px" height="70px" className="border-radius mr-3" src={igUser.profile_pic_url} /> <label className="text-ig">{this.state.igUser.username}</label>
                  </Card.Header>
                  <Row className="d-flex ml-2 mt-3">
                    <Col md={2} className="">
                      <img className="pr-2" width="55px" src={"http://localhost:3000/image/instagram.png"} />
                    </Col>
                    <Col md={3} className="">
                      {helper.kFormath(igUser.follower_count)}
                      <label>Followers</label>
                    </Col>
                    <Col md={3} className="">
                      <h5 className="mb-0">N/A</h5>
                      <label>Growth rate</label>
                    </Col>
                    <Col md={3} className="p-0">
                      {engRate}%
                      <label>Engaement rate</label>
                    </Col>
                  </Row>
                </Card>
              }
            </Col>
          </Row>
        ) : (
            <Row className="m-0">
              <Col className="p-2 margin-text-input">
                <label className="color-gray">
                  Facebook Profile
              </label>
                <Form.Control placeholder="Facebook Name" />
              </Col>
            </Row>
          )}
        <Row className="m-0">
          <Col className="pb-3 text-end">
            {/* <a href="/user/dashboard" style={{ cursor: "pointer" }}> */}
            <Button className="btn-cancel" onClick={() => this.onHide()}>
              Cancel
            </Button>
            {selectButton ?
              <>
                <Button className="btn-save mx-2 " onClick={() => this.saveIdol(1)}>
                  Save
                </Button>
                <Button className="btn-addmore active mx-2" onClick={() => this.saveIdol(2)}>
                  Save & Add more
                </Button>
              </>
              :
              <>
                <Button className="btn-save mx-2 cursor-auto">
                  Save
                </Button>
                <Button className="btn-addmore mx-2 cursor-auto">
                  Save & Add more
                </Button>
              </>
            }
            {/* </a> */}
          </Col>
        </Row>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => {
  return { login: state.login };
};

function mapDispatchToProps(dispatch) {
  return {
    openModal: (value) => dispatch(addModal(value)),
    checkLogin: value => dispatch(checkLogin(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIdolpopup);
