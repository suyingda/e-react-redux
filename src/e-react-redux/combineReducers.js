//处理所有文件reducers
const combineReducers = function (countData) {
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

export default combineReducers
