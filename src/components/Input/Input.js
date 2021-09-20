import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';

const updateNumber = number => {
    
}

const handleChange = event => {
    
}

const InputForm = () => {

    return (
        <Form className="form_styler" style={{width: '25%'}}>
            <Form.Field>
                <label>Number</label>
                <input onChange={handleChange} type="number" />
            </Form.Field>
            <Form.Field>
                <label>Color</label>
                <input  type="text" />
            </Form.Field>
            <Form.Field>
                <Button onClick={updateNumber}>Submit</Button>
            </Form.Field>
        </Form>
    )
    }


export default connect()(InputForm);