import React from 'react';
import ReactDOM from 'react-dom';

import Module1 from './module1'

import Module2 from './module2'

import store from './Module/index';
import { Provider } from './Module/easy-react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Module1 />
        <Module2 />
    </Provider>, document.getElementById('root')
);


// ReactDOM.render(
//     <Provider store={store.getState()}>
//         <Module1 />
//         <Module2 />
//         <Module11 {...store.getState()} />
//     </Provider>, document.getElementById('root')
// );
