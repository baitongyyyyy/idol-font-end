import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Example extends Component {

    state = {
        data: false
    }

    componentDidMount() {
        console.log(this.state, this.props);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">{this.props.user}</div>

                            
                        </div>
                        <Link to="/test" >Test</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(Example);
