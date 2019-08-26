
const Two = {
    name: 'Two',
    state: {
        value: 10000,
        jiaValue: 100000000000000
    },
    reselect: {
        abc: () => Two.reducer.twoData
    },
    actions: {
        aaaaa: function (v) {
            return function (dispatch, getState) {
                console.log(v, dispatch, getState, '打印')
                dispatch({
                    types: 'aaaaaa',
                    data: "已经修改"
                })
            }
        }
        // aaaaa: (v) => (dispatch, getState) => {
        //     console.log(v,dispatch,'打印')
        //     dispatch({
        //         types: 'aaaaaa',
        //         data: "已经修改"
        //     })
        // }
    },
    reducer: {
        value(state = Two.state.value, actions) {  //feature function 参数默认值问题       
            switch (actions.types) {
                case 'aaaaaa':
                    return { a: 1 }
                default:
                    return state;
            }
        },
        jiaValue(state = Two.state.jiaValue, actions) {  //feature function 参数默认值问题  
            switch (actions.types) {
                case 'bbbbbbbbbbbbbbbbb':
                    return 2
                default:
                    return state;
            }
        }
    }

}
export default Two


// let store = createStore(reducer, initState);
// store.subscribe(() => {
//     let state = store.getState(); //finaly 执行完change 拿到update 
//     console.log(state, 'redux');
// });



