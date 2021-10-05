import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class ObjectiveSelectbox extends Component {
    // render
    render() {
        return (
            <div>
                <h4>Objective:</h4>
                <Form.Select 
                title="Objective select"
                id="objective-select"
                onChange={(e) => this.props.sendData(e.target.value)}
                >
                    <option value="noselect">Pick objective...</option>
                    <option value="???">???</option>
                    <option value="The Lamb">The Lamb</option>
                    <option value="Mega Satan">Mega Satan</option>
                    <option value="Ultra Greed">Ultra Greed</option>
                    <option value="Delirium">Delirium</option>
                    <option value="Mother">Mother</option>
                    <option value="The Beast">The Beast</option>
                </Form.Select>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendData: (objective) => { dispatch({type: 'CHANGE_OBJ', newObjective: objective}) }
    }
}

export default connect(null, mapDispatchToProps)(ObjectiveSelectbox)