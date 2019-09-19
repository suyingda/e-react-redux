import React, { Component } from 'react';
import { connect } from 'e-react-redux'
// import {connect} from './e-react-redux/index'
// import {connect} from './../src/e-react-redux/dist/e-react-redux';
import One from "./Module/one";
class A extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { Two } = this.props;
        console.log(this,'One_one')
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


const { aaaa } = One.actions;
const mapStateToProps = (state, props) => {

    return {

    }
}
const mapDispatchToProps = {
    aaaa
}
export default connect(mapStateToProps, mapDispatchToProps)(A);
