import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export const TimedSelectbox = () => {
    // create state
    const [value, setValue] = useState('')
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }

    // render
    return (
        <div>
            <h4>Timed Objective:</h4>
            <Form.Select 
            title="Timed select"
            id="timed-select"
            onSelect={handleSelect}
            >
                <option>Pick timed objective...</option>
                <option value="None">None</option>
                <option value="Boss Rush">Boss Rush</option>
                <option value="Hush">Hush</option>
            </Form.Select>
        </div>
    )
  }