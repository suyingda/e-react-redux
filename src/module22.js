import React, { Component } from 'react';
import Module222 from './module222'
class A extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return <div>
            <div onClick={() => {
                console.log(this, '我是子组件打印')
            }}>
                <h3>Module22</h3>
                我是组件

            </div>
            <Module222 />
        </div>
    }
}

export default A