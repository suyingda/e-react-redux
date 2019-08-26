import React, { Component } from 'react';

import store from './Module/index'

 


class A extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Module1</h1>
            <div onClick={() => {
                store.dispatch({
                    types: 'add',
                    data: 10000000000
                })
            }}>11111
            </div>

        </div >
    }
}

export default A;