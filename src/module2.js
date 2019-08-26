import React, { Component } from 'react';
import { connect } from './Module/easy-react-redux';
import store from './Module';
import Module22 from './module22';

import Two from './Module/two'
class A extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props, '加多少加多少附件')
        return <div>
            <h1>Module2</h1>
            <div onClick={() => {
                this.props.aaaaa('参数');
            }}>点击第二个</div>
            <div onClick={() => {
                store.dispatch({
                    types: 'bbbbbbbbbbbbbbbbb',
                    data: 9999
                })
            }}>点击第3个666666666666</div>


            <Module22 />
        </div>
    }
}
const mapStateToProps = (state, props) => {
    const Two = state.Two;
    return {
        Two
    }
}
const { aaaaa } = Two.actions
const mapDispatchToProps = {
    aaaaa
}
export default connect(mapStateToProps, mapDispatchToProps)(A);