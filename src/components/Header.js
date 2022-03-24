import React from "react";
import {
  Navbar,
  Nav,
  Tab,
  Col,
} from "react-bootstrap";
import { MdDehaze } from "react-icons/md";
import { connect } from "react-redux";
// import { Link, withRouter } from 'react-router-dom';
// import { withTranslation } from 'react-i18next';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      tabHeader: 'idol'
    };
  }

  async componentDidMount() {
    // if (process.env.NEXT_PUBLIC_ENV_MODE=="development") console.log("header mounted", this.props);
    // await this.props.dispatch(checkLogin());
    // await this.props.dispatch(checkAddFarm());
    // // console.log("kkkkkk", this.props.login)
    // if (this.props.login) {
    //     if (this.props.login.companyEntity !== null) {
    //         await this.setState({
    //             companyId: this.props.login.companyEntity.companyId,
    //             pid: this.props.login.pid,
    //         })
    //     }
    //     if (this.props.login.farmerEntity) {
    //         this.setState({ farmerTypeId: this.props.login.farmerEntity.farmerTypeId })
    //     }
    //     await this.setState({ imgUrl: this.props.login.imgUrl })
    // }
    // setTimeout(() => { this.getDashboard() }, 1000)
  }

  render() {

    return (
      <React.Fragment>
        <Navbar expand="lg" sticky="top" className="background-color-headfar pb-1">
          {/* <Container> */}
          <Col md={10} className="d-flex">
          <Navbar.Brand href="#home">
            <img className="mb-1"
              src={window.location.origin + "/image/playboy-hori-logo.png"}
            />
          </Navbar.Brand>
          <Tab.Container id="tabs-header" defaultActiveKey="idol">
            <Nav variant="pills" className="flex-row tabNavHaed">
              <Nav.Item>
                <Nav.Link eventKey="idol" onClick={() => this.setState({ tabHeader: 'general'})}>Idol</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dashboard" onClick={() => this.setState({ tabHeader: 'dashboard' })}>Dashboard</Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
          {/* <Nav className="mr-auto">
            <Nav.Link href="#" className="nav-link pd-nav text-color-whirth active" >Idol</Nav.Link>
            <Nav.Link href="#" className="nav-link pd-nav text-color-whirth">Dashboard</Nav.Link>
          </Nav> */}
          </Col>
          <Col md={2} className="d-flex just-f-end">
          <Navbar.Text className="text-color-whirth mr-4">
            |
          </Navbar.Text>
          <div className="profile-header">
            <MdDehaze fontSize={20} className="icon-profile" />
            <img className="img-fluid-profile rounded-circle" width="40px" height="40px" src={window.location.origin + "/image/1.jpg"} />
          </div>
          </Col>
          {/* </Container> */}
        </Navbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {

};

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
