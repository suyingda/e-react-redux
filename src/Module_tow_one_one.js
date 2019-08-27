import React, { Component } from 'react';
import { connect } from 'e-react-redux'
class A extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { Two } = this.props;
        return <div>
            <div onClick={() => {
                console.log(Two, '我是子组件打印')
            }}>
                <h5>Module222</h5>
                {/* <p>    我是组件{JSON.stringify(Two.value)}</p> */}
                {/* <p>    我是组件{Two.jiaValue}</p> */}


            </div>
        </div>
    }
}

export default connect()(A)