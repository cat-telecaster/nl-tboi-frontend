import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class TimedSelectbox extends Component {
    // render
    render() {
        return (
            <div>
                <h4>Timed Objective:</h4>
                <Form.Select 
                title="Timed select"
                id="timed-select"
                onChange={(e) => this.props.sendData(e.target.value)}
                >
                    <option value="noselect">Pick timed objective...</option>
                    <option value="None">None</option>
                    <option value="Boss Rush">Boss Rush</option>
                    <option value="Hush">Hush</option>
                </Form.Select>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendData: (timed) => { dispatch({type: 'CHANGE_TIMED', newTimed: timed}) }
    }
}

export default connect(null, mapDispatchToProps)(TimedSelectbox)