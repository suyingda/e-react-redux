import { createStore, combineReducers } from 'e-react-redux';

/***收集所有Module 文件 reudcer object */
const files = require.context('./', false, /^((?!easy|index|Index|redux).)*\.js$/);
let middleware_r = {};
files.keys().forEach(element => {
    let rq = files(element).default;
    let rq_n = rq.name;  //Module name
    try {
        if (middleware_r[rq_n]) throw new Error(`exist same name -----> ${rq_n} >>>${element}`);
        middleware_r[rq_n] = rq.reducer;
    } catch (Error) {
        throw Error
    }
});
const reducer = combineReducers(middleware_r);
let store = createStore(reducer);
export default store;


//合并所有reducers 操作  交给createStore 处理
// const reducer = mofan({
//     [One.name]: One.reducer,
//     [Two.name]: Two.reducer
// });
//设计思想 整颗数据树  进行相应的 name module 分类获取
//难点  合并时候  确保区分 各个module间 的数据  清晰  可以通过 Object key 进行处理
