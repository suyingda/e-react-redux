
//组件Provider
import PropTypes from 'prop-types';
import React, { Component } from 'react';
export function createProvider() {
    class Provider_ extends Component {
        constructor(props) {
            super(props)
        }
        // 声明Context对象属性  便于后方connect组件拿到store  16+

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
    Provider_.childContextTypes = {
        store: PropTypes.object
    }
    return Provider_
}

export default createProvider()

