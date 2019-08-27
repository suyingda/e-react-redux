
const Two = {
    name: 'Two',
    state: {
        Module_tow_actions_Data1: 10000,
        Module_tow_actions_Data2: 100000000000000
    },
    reselect: {
        // abc: () => Two.reducer.twoData
    },
    actions: {
        Module_tow_actions_adsfasdf: (v) =>async(dispatch, getState) => {
              const a =   await  new Promise(function(resolve,reject){
                    setTimeout(function(){
                       return resolve('promise return')
                    }, 3000);    
                }) 
                 dispatch({
                    types: 'aaaaaa',
                    data: "已经修改"
                 })   
                 return a     
        },
        Module_tow_actions_addd: (v) => (dispatch, getState) => {
            dispatch({
                types: 'bbbbbbbbbbbbbbbbb',
                data: 9999
            })
        },
        
    },
    reducer: {
        Module_tow_actions_Data1(state = Two.state.Module_tow_actions_Data1, actions) {  //feature function 参数默认值问题       
            switch (actions.types) {
                case 'aaaaaa':
                    return  1234567
                default:
                    return state;
            }
        },
        Module_tow_actions_Data2(state = Two.state.Module_tow_actions_Data2, actions) {  
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



