import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {setNumber, setColor} from '../../Redux/Actions/Index.js'





class InputForm extends React.Component {
    state = {
        number: this.props.currentNumber,
        color: this.props.currentColor
    }

    updateNumber = ()=> {
        this.props.setNumber(this.state.number);
    }
    updateColor = () => {
        this.props.setColor(this.state.color);
    }

    handleChangeNum = event => {
        this.setState({
            number: event.target.value
        })
    }
    handleChangeCol = event => {
        this.setState({
            color: event.target.value
        })
    }

    render(){
    return (
        <Form className="form_styler" style={{width: '25%'}}>
            <Form.Field>
                <label>Number {this.state.number}</label>
                <input onChange={this.handleChangeNum} type="number" />
            </Form.Field>
            <Form.Field>
                <label>Color {this.state.color} </label>
                <input onChange={this.handleChangeCol} type="text" />
            </Form.Field>
            <Form.Field>
                <Button onClick={this.updateNumber}>Submit Number</Button>
                <Button onClick={this.updateColor}>Submit Color</Button>
            </Form.Field>
        </Form>
    )
    }
    }


export default connect(null, {setNumber, setColor})(InputForm);