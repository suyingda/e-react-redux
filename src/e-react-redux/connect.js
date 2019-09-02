
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//组件connect
const dummyState = {};
let _dispatchs = {}
export function createConnect() {
    return function connect(mapStateToProps, mapDispatchToProps = {}) {

        return function (params) {
            let Component_ = params;
            class C extends Component {
                constructor(props, context) {
                    super(props, context);
                    this.state = {
                        _dispatchs_: null
                    }
                    _dispatchs = {}
                    const __dispatch = this.context.store.dispatch;  //get context dispatch
                    const __state = this.context.store.getState() || {}; //get  state
                    //Dispatch updates the tree every time it modifies
                    this.context.store.subscribe(() => { this.setState(dummyState) });
                    mapStateToProps && mapStateToProps(this.context.store.getState() || {}) //返回mapStateToProps 数据  bug -----undetected
                    if (mapDispatchToProps) {  //启动dispatch 派发到页面中 ---props.xxxx
                        let objDis = {};
                        for (let i in mapDispatchToProps) {
                            objDis[i] = args => (mapDispatchToProps[i](args)).apply({}, [__dispatch, __state])
                        }
                        _dispatchs = objDis;
                        this.state._dispatchs_ = objDis;
                    }
                }
                shouldComponentUpdate(next, state) {
                    return true;
                }
                static getDerivedStateFromProps(props, state) {
                    _dispatchs = state._dispatchs_;
                }
                render() {
                    const _childrenData = mapStateToProps && mapStateToProps(this.context.store.getState() || {});
                    let mapToParams = {};
                    mapToParams = { ...this.props, ..._childrenData, ..._dispatchs }
                    return <Component_   {...mapToParams} />
                }
            }
            C.contextTypes = {  //get context data
                store: PropTypes.object
            }
            return C;
        }
    }

}

export default createConnect()