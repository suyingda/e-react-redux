import createStore from '../easy-react-redux'
let initState = {
    counter: {
        count: 0
    },
    info: {
        name: '',
        description: ''
    }
}
function reducer(state, actions) {
    switch (actions.types) {
        case 'add':
            return {
                ...state,
                counter: {
                    count: state.counter.count + 1
                }
            }
        case 'reduce':
            return {
                ...state,
                counter: {
                    count: state.counter.count - 1
                }
            }
        default:
            return state;

    }
}
let store = createStore(reducer, initState);
store.subscribe(() => {
    let state = store.getState(); //finaly 执行完change 拿到update 
    console.log(state);
});


