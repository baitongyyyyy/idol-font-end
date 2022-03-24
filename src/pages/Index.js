import React, { Component } from 'react';
import { connect } from 'react-redux';


class Index extends Component {

    state = {
        data: false
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">TEST Component</div>

                            <div className="card-body">I'm an Test component!</div>
                            <div className="card-body">สวัสดี</div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);