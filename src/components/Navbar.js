import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { checkLogin, addLogin } from '../redux/actions';

import api from '../redux/api';
const API = api.getAPI();


class NavbarList extends Component {

    state = {
        data: false,
        idolListTab: []
    }

    async componentDidMount() {
        if (this.props.login) {
            await API.connectTokenAPI(this.props.login.accessToken);
        }

        await this.props.checkLogin();
        this.getNavList()
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.props.login != prevProps.login && this.props.login) {
            await API.connectTokenAPI(this.props.login.accessToken);
        }
    }

    getNavList = async () => {
        let response;
        try {
            response = await API.getIdols()
        } catch (error) {
            response = error.response
        }
        if (response && response.status != 500) {
            if (response.status == 200) {
                this.setState({ idolListTab: response.data.idols_list_tabs })
                // console.log("list===tab", this.state.idolListTab)
            } else {
                console.log(response.data.message)
            }
        }
    }

    renderNav = () => {
        return this.state.idolListTab.map((item, index) => {
            let link = ''
            if (item.product_name === "All Idols") {
                link = "/idol-list"
            }
            if (item.product_name === "No Product") {
                link = "/no-product"
            }
            return (
                <Navbar className="nav nav-underline" key={index}>
                    <Nav.Link href={link} className={`nav-link pd-nav txt-style`} >{item.product_name} <span className=""> ({item.idols_count})</span></Nav.Link>
                    {/* <Nav.Link href="#" className="nav-link pd-nav txt-style" >No Product<span className=""> (12)</span></Nav.Link>
                        <Nav.Link href="#" className="nav-link pd-nav txt-style" >IdolPhone <span className=""> (79)</span></Nav.Link>
                        <Nav.Link href="#" className="nav-link pd-nav txt-style" >Foxclub <span className=""> (48)</span></Nav.Link>
                        <Nav.Link href="#" className="nav-link pd-nav txt-style" >หมอดู <span className=""> (0)</span></Nav.Link> */}
                </Navbar>
            );
        })
    }

    render() {
        const { idolListTab } = this.state
        return (
            <React.Fragment>
                <div className="nav-scroller bg-white box-shadow h-43">
                    {
                        this.renderNav()
                    }

                </div>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    // console.log('state', state)
    return { login: state.login };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLogin: value => dispatch(addLogin(value)),
        checkLogin: value => dispatch(checkLogin(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarList);