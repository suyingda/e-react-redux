import React, { Children, Component } from 'react';
//redux
export function createStore(reducer) {
    let state;
    //存放多个订阅actions
    let listeners = [];
    //订阅记录actions  通过subscribe 触发页面更新  牛逼
    function subscribe(callback) {
        listeners.push(callback)
    }
    //执行所有actions  （feature)
    function dispatch(actions) {
        //reducer 函数 主要线程 merge 所有操作在这里进行赋值给stroe总数居
        state = reducer(state, actions);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }
    //init data
    dispatch({ types: Symbol() });
    function getState() {
        return state;
    }
    return {
        subscribe,
        dispatch,
        getState
    }
}

export default createStore