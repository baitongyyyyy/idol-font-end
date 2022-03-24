import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Table, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { MdStar, MdMoreHoriz, MdMoreVert, MdControlPoint, MdImportExport } from "react-icons/md";
import { addModal, checkLogin, addLogin } from '../redux/actions';
// import { Link } from 'react-router-dom';
import Rating from 'react-rating'
import Select from 'react-select'
import api from '../redux/api';
import helper from "../redux/helper"
const API = api.getAPI();

class NoProduct extends Component {

    state = {
        data: false,
        idolList: [],
    }

    async componentDidMount() {
        if (this.props.login) {
            await API.connectTokenAPI(this.props.login.accessToken);
        }

        await this.props.checkLogin();
        this.getIdolList()
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.props.login != prevProps.login && this.props.login) {
            await API.connectTokenAPI(this.props.login.accessToken);
        }
    }

    openAddIdol = async () => {
        this.props.openModal(true);
    }

    getIdolList = async () => {
        let response;
        try {
            response = await API.getIdols()
        } catch (error) {
            response = error.response
        }
        if (response && response.status != 500) {
            if (response.status == 200) {
                this.setState({ idolList: response.data.idols })
                // console.log("list", this.state.idolList)
            } else {
                console.log(response.data.message)
            }
        }
    }

    renderTable = () => {
        const { idolList } = this.state
        return idolList.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <tr className="text-probold">
                        <td className="p-1">
                            <div className="text-center d-flex flex-row">
                                <img className="img-acc" src={item.profile_pic_url} />
                                <div className="mr-1 text-start a-self pl-2">
                                    <a href="/edit-idol" style={{ cursor: "pointer" }} className="pointer-link">
                                        <h5 className="text-align font-16">{item.ig_username}</h5>
                                    </a>
                                    {/* <h5 className="text-detail font-16">n/a</h5> */}
                                </div>
                            </div>
                        </td>
                        <td className="p-0 pt-2 align-ver">
                            <div className="mr-1 text-start">
                                <h5 className="txt-poin font-16">
                                    <img width="35px" height="25px" className="pr-2" src={"http://localhost:3000/image/instagram.png"} />{helper.kFormath(item.ig_follower_count)}
                                </h5>
                                {/* <h5 className="text-detail font-16">
                                    <img width="35px" height="25px" className="pr-2" src={"http://localhost:3000/image/facebook.png"} />{item.fb_follower_count.toFixed(2)}K
                                </h5> */}
                            </div>
                        </td>
                        <td className="p-0 pt-2 align-ver">
                            <div className="mr-1 text-start">
                                <h5 className="txt-poin font-16">{item.ig_engagement_rate.toFixed(2)}%</h5>
                                {/* <h5 className="text-detail font-16">{item.fb_engagement_rate.toFixed(2)}%</h5> */}
                            </div>
                        </td>
                        <td className="text-start p-0 pt-2 align-ver">
                            <div className="text-center d-flex flex-row">
                                {
                                    item.reputation.length > 0 ? item.reputation.map((req, index) => {
                                        return (<h5 className="btn btn-status mr-2 font-16" key={index}>{req}</h5>)
                                    })
                                        : ''
                                }
                                {/* <h5 className="btn btn-status mr-2 font-16">Entertainer</h5> */}
                            </div>
                        </td>
                        <td className="text-center p-0 pt-2 align-ver">
                            <div className="flex-row">
                                <Rating
                                    placeholderRating={item.beauty_level}
                                    emptySymbol={<MdStar color="#E0E0E0" size={15} />}
                                    placeholderSymbol={<MdStar color="#E6AF2E" size={15} />}
                                    readonly={true}
                                />
                            </div>
                        </td>
                        <td className="text-start p-0 pt-2 align-ver">
                            <div className="text-center d-flex flex-row ">
                                {
                                    item.attractive_point.length > 0 ? item.attractive_point.map((att, index) => {
                                        return (<h5 className="btn btn-status mr-2 font-16" key={index}>{att}</h5>)
                                    })
                                        : ''
                                }
                                {/* <h5 className="btn btn-status mr-2 font-16">นมโต</h5>
                                <h5 className="btn btn-status mr-2 font-16">ขาเล็ก</h5> */}
                            </div>
                        </td>
                        <td className="text-start p-0 pt-2 align-ver">
                            <div className="text-center d-flex flex-row ">
                                <Col md={12}>
                                    <Select
                                        placeholder={'รอแกะข้อมูล'}
                                        id="product"
                                        // value={this.state.mainJobSelectValue}
                                        // options={this.state.mainJobsList}
                                        // onChange={this.selectMainJobs}

                                        isSearchable={true}
                                        isDisabled={false}
                                    />
                                </Col>
                            </div>
                        </td>
                        <td className="text-center p-0 pt-2 align-ver">
                            <div className="text-center d-flex flex-row">
                                {item.sales_name ?
                                    <>
                                        <img className="img-sale" src={item.sales_image_url} />
                                        <h5 className="text-detail font-16 mr-2 a-self pl-2">{item.sales_name}</h5>
                                    </>
                                    :
                                    <h5 className="text-detail font-16 mr-2 a-self">N/A</h5>
                                }

                            </div></td>
                        <td className="text-center p-0 pt-2 align-ver">
                            <div className="text-center d-flex flex-row">
                                <img className="img-sale" src={item.creator_image_url} />
                                <h5 className="txt-poin font-16 a-self pl-2">{item.creator_name}</h5>
                            </div>
                        </td>
                        <td className="text-center p-0 pr-2 align-ver">
                            <a style={{ cursor: "pointer" }} className="pointer-link"><MdMoreHoriz className="icon-more" /></a>
                        </td>
                    </tr>
                </React.Fragment>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <Container className="width-full">
                    <Row className="ml-3 pt-3">
                        <Nav.Link className="pl-3 nav-link txt-nopro active">
                            รอแกะข้อมูล (23)
                        </Nav.Link>
                        <Nav.Link className="pl-3 nav-link txt-nopro">
                            กำลังกรอกข้อมูล (7)
                        </Nav.Link>
                        <Nav.Link className="pl-3 nav-link txt-nopro">
                            รอ Assign Product (7)
                        </Nav.Link>
                    </Row>
                    <Card className="border-0">
                        <Card.Header className="p-0 border-bottom-0">
                            <section className="pt-3 w-100 bg-gray">
                                <Row className="m-0">
                                    <Col className="d-flex justify-content-end-table m-0 p-0">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn btn-action mr-3 ">
                                                Action
                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button className="btn btn-quick mr-3" onClick={this.openAddIdol}><MdControlPoint className="mr-1 icon-quick" />Quick Add</Button>
                                        <a style={{ cursor: "pointer" }} className="pointer-link">
                                            <MdMoreVert className="mr-3 icon-more" />
                                        </a>
                                    </Col>
                                </Row>
                            </section>
                        </Card.Header>
                        <Card.Body className="pb-2 bg-gray">
                            <Table striped hover size="md" responsive >
                                <thead>
                                    <tr>
                                        <th className="text-table tb-width2">Social accounts<MdImportExport className="icon-sort" /></th>
                                        <th className="text-table tb-width1">Followers<MdImportExport className="icon-sort" /></th>
                                        <th className="text-table tb-width4">Engagement %<MdImportExport className="icon-sort" /></th>
                                        <th className="text-table tb-width1">Reputation</th>
                                        <th className="text-table tb-width1">Beauty<MdImportExport className="icon-sort" /></th>
                                        <th className="text-table tb-width1">จุดเด่น</th>
                                        <th className="text-table tb-width4">Product</th>
                                        <th className="text-table tb-width1">Sales<MdImportExport className="icon-sort" /></th>
                                        <th className="text-table tb-width1">Creator<MdImportExport className="icon-sort" /></th>
                                        <th className="text-table tb-width1"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTable()}
                                </tbody>

                            </Table>
                        </Card.Body>
                    </Card>
                </Container>
            </React.Fragment >

            // <>
            //   <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            //   <div class="sidebar-sticky">
            //     <ul class="nav flex-column">
            //       <li class="nav-item">
            //         <a class="nav-link active" href="#">
            //           <span data-feather="home"></span>
            //           Dashboard <span class="sr-only">(current)</span>
            //         </a>
            //       </li>
            //     </ul>
            //   </div>
            // </nav>
            // </>

        );
    }
}

const mapStateToProps = state => {
    // console.log('state', state)
    return { login: state.login };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: value => dispatch(addModal(value)),
        addLogin: value => dispatch(addLogin(value)),
        checkLogin: value => dispatch(checkLogin(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoProduct);