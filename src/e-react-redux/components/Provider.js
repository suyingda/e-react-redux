
//组件Provider
import PropTypes from 'prop-types';
import React, { Component } from 'react';
const Provider = function () {
    return class Provider_ extends Component {
        constructor(props) {
            super(props)
        }
        // 声明Context对象属性  便于后方connect组件拿到store  16+
        static childContextTypes = {
            store: PropTypes.object
        }
        getChildContext() {
            return {
                store: this.props.store
            };
        }
        render() {
            return <div>
                {this.props.children}
                {/* {Children.only(this.props.children)} */}
            </div>
        }
    }
}
export default Provider()

