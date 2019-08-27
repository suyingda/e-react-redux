import React from 'react';
import ReactDOM from 'react-dom';
import Module_one from './Module_one'
import Module_two from './Module_two'
import store from './Module/Index';
import { Provider } from './e-react-redux';
 
ReactDOM.render(
    <Provider store={store}>
        <Module_one />
        <Module_two />
    </Provider>, document.getElementById('root_')
);

