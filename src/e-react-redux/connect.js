
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//组件connect
const dummyState = {};
const connect = function (mapStateToProps, mapDispatchToProps) {
    return function (params) {
        let Co = params;
        class C extends Component {
            static contextTypes = {  //get context data
                store: PropTypes.object
            }
            constructor(props) {
                super(props)
                this.state = {
                    dis: {}
                }
            }
            componentDidMount() {
                const middleware = dummyState;
                const __dispatch = this.context.store.dispatch;  //获取dispatch
                const __state = this.context.store.getState() || {}; //所有返回值
                this.context.store.subscribe(() => { this.setState(dummyState) })  //每次修改dispatch 更新tree
                mapStateToProps && mapStateToProps(this.context.store.getState() || {}) //返回mapStateToProps 数据
                if (mapDispatchToProps) {  //启动dispatch 派发到页面中 ---props.xxxx
                    let objDis = {};
                    for (let i in mapDispatchToProps) {
                        objDis[i] = args => (mapDispatchToProps[i](args)).apply({}, [__dispatch, __state])
                    }
                    this.setState({
                        dis: objDis
                    })
                }
            }
            render() {
                /****** const newState = this.context.store.getState() || {};所有返回值*/
                const childrenData = mapStateToProps && mapStateToProps(this.context.store.getState() || {})
                return <div>
                    {/* 数据赋值 高阶组件*/}
                    <Co   {...childrenData} {...this.state.dis} />
                </div>
            }
        }
        return C;
    }
}

export default connect