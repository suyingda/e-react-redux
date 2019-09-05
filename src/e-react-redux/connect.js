import React from 'react';
import PropTypes from 'prop-types';
//组件connect
const dummyState = {};
let _dispatchs = {}
let selector = 0;

export function createConnect() {
    return function connect(mapStateToProps, mapDispatchToProps = {}) {
        return function (Params) {
            class C extends React.Component {
                constructor(props, context) {
                    super(props, context = {});
                    this.state = {
                        _dispatchs_: null,
                    };
                    selector = 0;
                    this.renderToProps()
                }
                static getDerivedStateFromProps(props, state) {
                    _dispatchs = state._dispatchs_;
                    return props
                }
                componentWillUnmount() {
                    // this.state._dispatchs_=null;
                    // this.renderToProps=null;
                    // mapStateToProps=null;
                    // mapDispatchToProps=null;
                }
                renderToProps = () => {
                    try {
                        if (this.context.store) {
                            selector++;
                            _dispatchs = {};
                            const __dispatch = this.context.store && this.context.store.dispatch;  //get context dispatch
                            const __state = this.context.store && this.context.store.getState() || {}; //get  state
                            //Dispatch updates the tree every time it modifies
                            this.context.store && this.context.store.subscribe(() => {
                                this.setState(dummyState)
                            });
                            this.context.store && mapStateToProps && mapStateToProps(this.context.store.getState() || {}) //返回mapStateToProps 数据  bug -----undetected
                            if (mapDispatchToProps) {  //启动dispatch 派发到页面中 ---props.xxxx
                                const objDis = {};
                                for (const i in mapDispatchToProps) {
                                    if (__dispatch) {
                                        selector = 10000;
                                    }
                                    objDis[i] = args => (mapDispatchToProps[i](args)).apply({}, [__dispatch, __state])
                                }
                                _dispatchs = objDis;
                                this.state._dispatchs_ = objDis;
                                return objDis
                            }
                        } else {
                            throw 'not dispatch'
                        }
                    } catch (e) {
                        // console.log(e)
                    }
                }

                render() {
                    if (selector < 1) {
                        this.renderToProps()
                    }
                    const _childrenData = mapStateToProps && mapStateToProps(this.context.store.getState() || {});
                    const mapToParams = {...this.props, ..._childrenData, ..._dispatchs}
                    return <Params   {...mapToParams}  />
                }
            }
            C.contextTypes = {  //get context data
                store: PropTypes.object
            };
            return C;
        }
    }
}

export default createConnect()
