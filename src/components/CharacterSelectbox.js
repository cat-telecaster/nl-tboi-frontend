import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class CharacterSelectbox extends Component {
    // create state
    /*
    const [value, setValue] = useState('')
    const handleChange=(e)=>{
        console.log(e)
        setValue(e)

    }
    */
    /*
    handleChange = (e) => {
        this.props.sendData({character: e.target.value})
    }
    */

    // render
    render() {
        return (
            <div>
                <h4>Character:</h4>
                <Form.Select 
                title="Character select"
                id="character-select"
                //{(e) => this.props.sendData({ character: e.target.value })}
                onChange={(e) => this.props.sendData(e.target.value)}
                >
                    <option>Pick character...</option>
                    <option value="Isaac">Isaac</option>
                    <option value="Magdalene">Magdalene</option>
                    <option value="Cain">Cain</option>
                    <option value="Judas">Judas</option>
                    <option value="Blue Baby">???</option>
                    <option value="Eve">Eve</option>
                    <option value="Samson">Samson</option>
                    <option value="Azazel">Azazel</option>
                    <option value="Lazarus">Lazarus</option>
                    <option value="Eden">Eden</option>
                    <option value="Lost">The Lost</option>
                    <option value="Lilith">Lilith</option>
                    <option value="Keeper">The Keeper</option>
                    <option value="Apollyon">Apollyon</option>
                    <option value="Forgotten">The Forgotten</option>
                    <option value="Bethany">Bethany</option>
                    <option value="Jacob&Esau">Jacob & Esau</option>
                    <option value="Tainted Isaac">Tainted Isaac</option>
                    <option value="Tainted Magdalene">Tainted Magdalene</option>
                    <option value="Tainted Cain">Tainted Cain</option>
                    <option value="Tainted Judas">Tainted Judas</option>
                    <option value="Tainted Blue Baby">Tainted ???</option>
                    <option value="Tainted Eve">Tainted Eve</option>
                    <option value="Tainted Samson">Tainted Samson</option>
                    <option value="Tainted Azazel">Tainted Azazel</option>
                    <option value="Tainted Lazarus">Tainted Lazarus</option>
                    <option value="Tainted Eden">Tainted Eden</option>
                    <option value="Tainted Lost">Tainted Lost</option>
                    <option value="Tainted Lilith">Tainted Lilith</option>
                    <option value="Tainted Keeper">Tainted Keeper</option>
                    <option value="Tainted Apollyon">Tainted Apollyon</option>
                    <option value="Tainted Forgotten">Tainted Forgotten</option>
                    <option value="Tainted Bethany">Tainted Bethany</option>
                    <option value="Tainted Jacob">Tainted Jacob</option>
                </Form.Select>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendData: (character) => { dispatch({type: 'CHANGE_CHAR', newCharacter: character}) }
    }
}

export default connect(null, mapDispatchToProps)(CharacterSelectbox)