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
    actions: {
        MainActons: (v) => (dispatch, getState) => {
            dispatch({
                types: 'add',
                data: v || 'xiugai'
            })
        },
        aaaa: (v) => (dispatch, getState) => {
            dispatch({
                types: 'add',
                data: v || 'xiugai'
            })
        },

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
export default One


