import React from 'react';
import PropTypes from 'prop-types';
//组件connect
const dummyState = {};
let propsDispatch = {};
let selector = false;
export function createConnect() {
    return function connect(mapStateToProps, mapDispatchToProps = {}) {
        return function (Params) {
            class C extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        stateDispatchs: null,
                        subscribeClick: () => this.setState(dummyState)
                    };
                    selector = false;
                    this.renderToProps();
                }

                static getDerivedStateFromProps(props, state) {
                    propsDispatch = state.stateDispatchs;
                    return props
                }

                componentWillUnmount() {
                    // this.state.stateDispatchs=null;
                    // this.renderToProps=null;
                    // mapStateToProps=null;
                    // mapDispatchToProps=null;
                    this.context.store.subscribe(this.state.subscribeClick)();
                }

                renderToProps() {
                    try {
                        if (this.context.store) {
                            propsDispatch = {};
                            const __dispatch = this.context.store && this.context.store.dispatch;  //get context dispatch
                            const __state = this.context.store && this.context.store.getState() || {}; //get  state
                            //Dispatch updates the tree every time it modifies
                            this.context.store && this.context.store.subscribe(this.state.subscribeClick);
                            this.context.store && mapStateToProps && mapStateToProps(this.context.store.getState() || {}) //返回mapStateToProps 数据  bug -----undetected
                            if (mapDispatchToProps) {  //启动dispatch 派发到页面中 ---props.xxxx
                                const objDis = {};
                                for (const i in mapDispatchToProps) {
                                    if (__dispatch) selector = true;
                                    objDis[i] = args => (mapDispatchToProps[i](args)).apply({}, [__dispatch, __state])
                                }
                                propsDispatch = objDis;
                                this.state.stateDispatchs = objDis;
                                return objDis
                            }
                        } else {
                            throw 'not dispatch'
                        }
                    } catch (e) {
                        // console.log(e, 'e')
                    }
                };

                render() {
                    if (!selector) {
                        this.renderToProps()
                    }
                    const _childrenData = mapStateToProps && mapStateToProps(this.context.store.getState() || {});
                    const mapToParams = {...this.props, ..._childrenData, ...propsDispatch}
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
