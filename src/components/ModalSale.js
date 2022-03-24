import React from "react";
import { Modal, Row, Col, Button, Form, InputGroup, ListGroup, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { modalSale, checkLogin } from "../redux/actions";
import Rating from 'react-rating'
import Select from 'react-select'
import api from '../redux/api';
import helper from "../redux/helper"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const API = api.getAPI();
const MySwal = withReactContent(Swal)

class ModalSale extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectButton: false,
            saleSteamList: [],
            saleSteamSelectValue: [],
            saleSteamId: 0,
            remark: '',
        };
    }

    async componentDidMount() {
        if (this.props.login) {
            await API.connectTokenAPI(this.props.login.accessToken);
        }

        await this.props.checkLogin();
        await this.getSaleSteam()
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.props.login != prevProps.login && this.props.login) {
            await API.connectTokenAPI(this.props.login.accessToken);
        }
    }

    onHide = () => {
        this.setState({ selectButton: false, saleSteamSelectValue: [], saleSteamId: '', })
        this.props.openModal(false);
    };

    getSaleSteam = async () => {
        let response;
        try {
            response = await API.getSaleSteam()
        } catch (error) {
            response = error.response
        }
        if (response && response.status != 500) {
            let saleSteamArray = [];
            if (response.status == 200) {
                response.data.forEach(element => {
                    // saleSteamArray.push({ value: element.id, label: element.firstname });
                    saleSteamArray.push({ value: element.id, label: <div><img src={element.image_url} className="img-change-sale" />{element.firstname}</div> });
                });
                this.setState({
                    saleSteamList: saleSteamArray
                });
                console.log("sssss", this.state.saleSteamList);
            } else {
                console.log(response.data.message)
            }
        }
    }

    addSale = async () => {
        const { remark, saleSteamId } = this.state
        let id= 0;
        let response;
        const params = JSON.stringify({
            "salesId": saleSteamId,
            "remark": remark,
        });
        try {
            response = await API.addSale(id, params)
        } catch (error) {
            response = error.response
        }
        if (response && response.status != 500) {
            if (response.status == 200) {

            } else {
                console.log(response.data.message)
            }
        }
    }

    selectSaleSteam = (optionSelected) => {
        this.setState({
            saleSteamId: optionSelected.value,
            saleSteamSelectValue: [{ value: optionSelected.value, label: optionSelected.label }]
        });
    }

    render() {
        const { show } = this.props;

        return (
            <Modal
                show={show}
                onHide={this.onHide}
                size="md"
                // id="login-form"
                // aria-labelledby="contained-modal-title-vcenter-l"
                centered
            >
                <Row className="position m-3">
                    <h5 className="text-bold">Change sales</h5>
                    <Col md={12} className="p-0 mt-3">
                        <h6>Do you want to change sale to:</h6>
                    </Col>
                </Row>
                <Row className="ml-3 mr-3 mb-3">
                    <Col md={12} className="p-0">
                        <Form>
                            <Form.Group>
                                <Form.Label>Sales</Form.Label>
                                <Select
                                    placeholder=""
                                    id="saleSteam"
                                    name="saleSteam"
                                    value={this.state.saleSteamSelectValue}
                                    options={this.state.saleSteamList}
                                    onChange={(value) => {
                                        this.selectSaleSteam(value)
                                        this.setState({ selectButton: true })
                                    }
                                    }
                                    isSearchable={true}
                                    isDisabled={false}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter remark</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    value={this.state.remark}
                                    onChange={e => {
                                        let remarks = e.target.value;
                                        this.setState({ remark: remarks })
                                    }} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row className="m-0">
                    <Col className="pb-3 text-end">
                        {/* <a href="/user/dashboard" style={{ cursor: "pointer" }}> */}
                        <Button className="btn-cancel" onClick={() => this.onHide()}>
                            CANCEL
                        </Button>
                        {this.state.selectButton ?
                            <>
                                <Button className="btn-addmore active mx-2">
                                    SAVE CHANGES
                                </Button>
                            </>
                            :
                            <>
                                <Button className="btn-addmore mx-2 cursor-auto">
                                    SAVE CHANGES
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
        openModal: (value) => dispatch(modalSale(value)),
        checkLogin: value => dispatch(checkLogin(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSale);
