import React from 'react';
import { Form, Button} from 'semantic-ui-react';


const InputForm = () => {
    return (
        <Form className="form_styler" style={{width: '25%'}}>
            <Form.Field>
                <label>Number</label>
                <input  type="number" />
            </Form.Field>
            <Form.Field>
                <label>Color</label>
                <input  type="text" />
            </Form.Field>
            <Form.Field>
                <Button>Submit</Button>
            </Form.Field>
        </Form>
    )
}

export default InputForm;