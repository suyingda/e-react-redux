import React, { Children, Component } from 'react';
const dummyState = {};
export const createStore = function (reducer) {
    let state;
    //存放多个订阅actions
    let listeners = [];
    //订阅记录actions  通过subscribe 触发页面更新  牛逼
    function subscribe(v) {
        listeners.push(v)
    }
    //执行所有actions  （feature)
    function dispatch(actions) {
        //reducer 函数 关键点   主要线程 mofan 所有操作在这里进行赋值 给 stroe总数居
        state = reducer(state, actions);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }
    /*  用一个不匹配任何计划的 type，来获取初始值 */
    dispatch({ types: Symbol() });

    function getState() {
        return state;
    }
    console.log(state, '初始化')
    return {
        subscribe,
        dispatch,
        getState
    }
}
export const mofan = function (countData) {
    let keys = Object.keys(countData);
    let nextState = {};
    // _ 呼应上面的reduers 操作  本质就是引用调用
    return function _(state = {}, actions) {
        for (let i in keys) {
            const k = keys[i];  //对应的key
            const r = countData[k];
            const dn = state[k];  //获取已经修改的对应的module 值
            for (let i in r) {
                //dn?dn[i]:dn dn不存在初始化阶段  dn存在修改值情况，则获取对应key的值
                nextState[k] = { ...nextState[k], [i]: r[i](dn ? dn[i] : dn, actions) }
            }
        }
        //返回所有数据  
        return nextState;
    }
}
export const connect = function (mapStateToProps, mapDispatchToProps) {
    return function (params) {
        let Co = params;
        class Ad extends Component {
            static contextTypes = {
                store: PropTypes.object
            }
            constructor(props) {
                super(props)
                this.state = {
                    dis: {}
                }
            }
            componentDidMount() {
                const __dispatch = this.context.store.dispatch;  //获取dispatch
                const __state = this.context.store.getState() || {}; //所有返回值
                this.context.store.subscribe(() => { this.setState(dummyState) })  //每次修改dispatch 更新tree
                mapStateToProps && mapStateToProps(this.context.store.getState() || {}) //返回mapStateToProps 数据
                if (mapDispatchToProps) {  //启动dispatch 派发到页面中 ---props.xxxx
                    for (let i in mapDispatchToProps) {
                        this.setState({
                            dis: {
                                ...this.state.dis,
                                [i]: args => (mapDispatchToProps[i](args)).apply({}, [__dispatch, __state])
                            }
                        })
                    }
                }
            }
            render() {
                // const newState = this.context.store.getState() || {}; //所有返回值
                const childrenData = mapStateToProps && mapStateToProps(this.context.store.getState() || {})
                return <div>
                    <Co   {...childrenData} {...this.state.dis} />
                </div>
            }
        }
        return Ad;
    }
}
// export const formData = React.createContext({
//     theme: 'dark',
//     toggle: () => { console.log('i am context16') }, //向上下文设定一个回调方法
// });
import PropTypes from 'prop-types';
export const Provider = class H extends Component {
    constructor(props) {
        super(props)
    }
    // 声明Context对象属性  便于后方connect组件拿到store  16+
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    render() {
        return <div>
            {this.props.children}
            {/* {Children.only(this.props.children)} */}
        </div>
    }
}

