import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export const ObjectiveSelectbox = () => {
    // create state
    const [value, setValue] = useState('')
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }

    // render
    return (
        <div>
            <h4>Objective:</h4>
            <Form.Select 
            title="Objective select"
            id="objective-select"
            onSelect={handleSelect}
            >
                <option>Pick objective...</option>
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
  }