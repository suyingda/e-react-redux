import React, { Component } from 'react';

import SA from './Module/index'

class A extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div onClick={() => {
            SA.dispatch({
                types: 'add',
                data: 10000000000
            })
        }}>11111</div>
    }
}

export default A;