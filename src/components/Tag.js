import React, { Component } from 'react'

class Tag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    sendData = () => {
        // console.log("object", this.state.name)
        this.props.getName(this.state.name)
    }

    render() {
        // console.log(this.props)
        const { name } = this.props
        return (
            <div>
                <h1>This is Tag</h1>
                <h1>{name}</h1>

                <input type="text" value={this.state.name} onChange={(e)=>{
                    this.setState({name: e.target.value})
                    console.log("name",this.state.name)
                }}/>
                <button onClick={this.sendData}>Click</button>
            </div>
        )
    }
}

export default Tag;