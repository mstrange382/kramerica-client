import React, {Component} from 'react';
import { Form } from 'reactstrap';


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '', 
            lastName: '',
            email:'',
            passwordhash:'',
            admin:'',
        }
    }

    handleSubmit = () => {
        this.setState({})
    }


render() {
    return(
        <div>
            Hello from Register
            <Form onsubmit={this.handleSubmit}>

            
            </Form>
        </div>
    )
    
    }
}   

export default Register