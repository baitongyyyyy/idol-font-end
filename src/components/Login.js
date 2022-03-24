import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addLogin } from '../redux/actions';
import api from '../redux/api';

const API = api.getAPI();

class Login extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        };
    }


    toLogin = async () => {
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        const params = JSON.stringify({
            "username": data.username,
            "password": data.password,
        });

        let res = await API.login(params);
        // console.log(res)
        if (res.status === 201) {
            this.props.addLogin(res.data);
            // console.log("login", this.props)
            this.props.history.push("/idol-list")
        }
    }

    render() {
        return (
            <>
                <Container className="con-h paddin-log">
                    <div>
                        <Row className="justify-content-center">
                            <Col md={5}>
                                <h4 className="text-bold">Log in to your account</h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={5}>
                                <h6>Welcome back, log in with your account to continue your progress with your marketing campaign</h6>
                            </Col>
                        </Row>
                        {/* <Row className="justify-content-center mt-2">
                            <Col md={5}>
                                <Form.Label>Country code</Form.Label>
                                <Select
                                    placeholder="Thailand +66"
                                />
                            </Col>
                        </Row> */}
                        <Row className="justify-content-center mt-3">
                            <Col md={5}>
                                <Form className="">
                                    <Form.Group>
                                        <Form.Label>Username (7 digits number)</Form.Label>
                                        <Form.Control type="email" placeholder="Username (7 digits number)" maxLength={7} onChange={e => this.setState({ username: e.target.value })}/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={5}>
                                <Form className="">
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your password" onChange={e => this.setState({ password: e.target.value })} />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={5}>
                                <Button type="button" className="btn btn-dark w-100" onClick={this.toLogin}>Continue</Button>
                            </Col>
                        </Row>
                        <Row className="justify-content-text mt-3 mb-3">
                            <Col md={5}>
                                <label className="text-left">Don't have an account yet? <span className="text-primary">Create here</span></label>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        );
    }
}

const mapStateToProps = state => {
    // return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLogin: value => dispatch(addLogin(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));