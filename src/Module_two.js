import React, {Component} from 'react';
import {connect} from 'e-react-redux';
// import {connect} from './e-react-redux/index'
// import {connect} from './../src/e-react-redux/dist/e-react-redux';
import Module_two_one from './Module_two_one';
import Two from './Module/two';

class AA extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this, 'two')
        return <div>
            <h1>Module2</h1>
            <div onClick={() => {
                this.props.Module_tow_actions_adsfasdf('参数').then((v) => {
                    console.log('这个是什么', v)
                });
            }}>Module_tow_actions_adsfasdf
            </div>
            <div onClick={() => {
                this.props.Module_tow_actions_addd('参数');
            }}>Module_tow_actions_addd
            </div>
            <Module_two_one/>
        </div>
    }
}

const mapStateToProps = (state, props) => {
    const {Module_tow_actions_Data1, Module_tow_actions_Data2} = state.Two;
    return {
        Module_tow_actions_Data1,
        Module_tow_actions_Data2
    }
}

const {Module_tow_actions_adsfasdf, Module_tow_actions_addd} = Two.actions;
const mapDispatchToProps = {
    Module_tow_actions_adsfasdf,
    Module_tow_actions_addd
}
export default connect(mapStateToProps, mapDispatchToProps)(AA);
