import React, { Component } from 'react';
import Module_tow_one_one from './Module_tow_one_one'
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
            <Module_tow_one_one />
        </div>
    }
}

export default A