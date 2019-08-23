
const One = {
    name: 'One',
    state: {
        counter: {
            count: 0
        },
        info: {
            name: '',
            description: ''
        }
    },
    reducer: {
        oneCLick(state = One.state, actions) {
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
    }

}


// let store = createStore(reducer, initState);
// store.subscribe(() => {
//     let state = store.getState(); //finaly 执行完change 拿到update 
//     console.log(state, 'redux');
// });

export default One


