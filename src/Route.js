import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { checkLogin } from './redux/actions';
import App from "./pages/Home";
import Example from "./pages/Example";
import Test from "./pages/Test";
import IdolList from "./pages/IdolList";
import NoProduct from "./pages/NoProduct";
import EditIdol from "./pages/EditIdol";
import PageNotFound from "./pages/PageNotFound";
import NavbarList from "./components/Navbar";
import Header from "./components/Header";
import AddModal from "./components/AddIdolpopup";
import Login from "./components/Login";
import ModalSale from "./components/ModalSale";


class Routers extends Component {

  componentDidMount= async () => {
    await this.props.checkLogin()
  }

  render() {
    const { addmodal, salemodal } = this.props;
    // console.log("===>", this.props)
    return (
      <div>
        {this.props.login === false ? <Login /> :
          <>
            <Header />
            <NavbarList />
            <AddModal show={addmodal} />
            <ModalSale show={salemodal}/>
            <Switch>
              <Route path="/idol-list" component={IdolList} />
              <Route path="/no-product" component={NoProduct} />
              <Route path="/edit-idol" component={EditIdol} />
              {/* <Route exact path="/" component={this.redireactToLogin} />
              <SecureRoute path="/idol-list" {...this.props} component={IdolList} /> */}
              <Route path="*" exact={true} component={PageNotFound} />
            </Switch>
          </>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('ll', state)
  return {
    addmodal: state.addmodal,
    login: state.login,
    salemodal: state.salemodal,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    checkLogin: value => dispatch(checkLogin(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers)
