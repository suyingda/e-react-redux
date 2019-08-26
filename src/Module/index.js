import { createStore, mofan } from './easy-react-redux';

import One from './one'
import Two from './two'

// const s = [One, Two];
// let obj = {};
// s.forEach((item, i) => {
//     const keys = item.name;
//     obj[keys] = item.reducer
// })

//合并所有reducers 操作  交给createStore 处理
const reducer = mofan({
    [One.name]: One.reducer,
    [Two.name]: Two.reducer
});

let store = createStore(reducer);
export default store;


//设计思想 整颗数据树  进行相应的 name module 分类获取   
//难点  合并时候  确保区分 各个module间 的数据  清晰  可以通过 Object key 进行处理     