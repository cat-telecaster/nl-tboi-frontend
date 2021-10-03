import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Submit extends Component {
    render() {
        console.log(this.props)
        const { character, obj, timed } = this.props;
        //console.log(character[character.length - 1])
        //console.log(obj[obj.length - 1])
        //console.log(timed[timed.length - 1])
        return (
            // things
            <Button variant="primary">Primary</Button>
        )
    };
}

const mapStateToProps = (state) => {
    return{
        character: state.character[state.character.length - 1],
        obj: state.obj[state.obj.length - 1], 
        timed: state.timed[state.timed.length - 1]
    }
}

export default connect(mapStateToProps, null)(Submit)