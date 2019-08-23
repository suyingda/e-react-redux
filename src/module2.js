import React, { Component } from 'react';


import SA from './Module/index'
class A extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return <div>
            <div onClick={() => {
                console.log(SA.getState())
            }}>
                点击展示数据
        </div>
            <div onClick={() => {

                SA.dispatch({
                    types: 'aaaaaa',
                    data: "已经修改"
                })
            }}>点击第二个</div>
            <div onClick={() => {

                SA.dispatch({
                    types: 'bbbbbbbbbbbbbbbbb',
                    data: 9999
                })
            }}>点击第3个666666666666</div>
        </div>
    }
}
export default A;