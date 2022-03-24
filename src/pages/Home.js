import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import { addLogin } from '../redux/actions'

import Tag from '../components/Tag';

class App extends Component {

  
  state = {
      data: 'user',
      name: "Sarayut"
  }

  display = (value) => {
    console.log(value);
    this.props.addUser( value );
    // getProvince().then(response=>{
    //   console.log("response", response)
    // });
  }

  renderButton = () => {
    return (<button onClick={e=>this.display(Math.random())}>Button</button>)
  }

  changeLanguage = lng => {
    const {  i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  getfromChildName = (value) => {
    // console.log("from child", value)
    this.setState({name: value})
  }

  render () {
    const { t,  } = this.props;
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <Tag  name={this.state.name} getName={value => this.getfromChildName(value)} />
          <h2>{t("hello")}</h2>
          <p>{t("footer:address")}</p>
          <p>{this.props.user}</p>
          <p>{this.props.login}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.renderButton()}
          <button onClick={() => this.changeLanguage("th")}>th</button>
          <button onClick={() => this.changeLanguage("en")}>en</button>
          <a href="/example" >tag a example</a>
          <Link to="/example" >example</Link>
          <Link to="/test" >test</Link>
        </header>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, login: state.login };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: user => dispatch(addLogin(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(["home","footer"])(App));
