import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

async function networkRequest(sendData) {
    const { REACT_APP_API_KEY, REACT_APP_API_ENDPOINT } = process.env;
    fetch(REACT_APP_API_ENDPOINT, {
        method: 'POST',
        headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(sendData),
            "Host": "http://localhost:3000/",
            "X-Api-Key": REACT_APP_API_KEY 
        },
        body: JSON.stringify(sendData)
    }).then((response) => {
        //console.log(response.json())
        return response.json()
    }).then((responseData) => {
        //console.log(responseData.predicted_label)
        alert(`Probability to win is ${Math.round(responseData.predicted_label[1] * 100)}%!`)
        //return responseData.predicted_label;
    }).catch((err) => {
        console.log(err)
    });
}

function Submit(props) {
    const [isLoading, setLoading] = useState(false);
    const data = [props.character, props.obj, props.timed]
    useEffect(() => {
        if (isLoading) {
            networkRequest(props).then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <div className="d-grid gap-2">
            <Button 
                variant="primary" 
                size="lg"
                disabled={data.includes(undefined) || data.includes("noselect" || isLoading)}
                onClick={!(data.includes(undefined) || data.includes("noselect") || isLoading) ? handleClick : null}
            >
                {!(data.includes(undefined) || data.includes("noselect")) ? (!isLoading ? 'Predict!' : 'Loading...') : 'Enter valid conditions'}
            </Button> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        character: state.character[state.character.length - 1],
        obj: state.obj[state.obj.length - 1], 
        timed: state.timed[state.timed.length - 1]
    }
}

export default connect(mapStateToProps, null)(Submit)