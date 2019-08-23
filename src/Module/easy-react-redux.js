export const createStore = function (reducer) {
    let state;
    //存放多个订阅actions
    let listeners = [];
    //订阅记录actions
    function subscribe(v) {
        listeners.push(v)
    }
    //执行所有actions  （feature)
    function dispatch(actions) {
        //reducer 函数 关键点   主要线程 mofan 所有操作在这里进行赋值 给 stroe总数居
        state = reducer(state, actions);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            listener();
        }
    }
    /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
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

