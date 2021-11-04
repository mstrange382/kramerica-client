import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';


class IdeaCreate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            category:'',
            description:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    handleSubmit = (e) => {
        e.preventDefault();
        const {
            name,
            category,
            description
        } = this.state;

        console.log('Hello!!');

        fetch(`http://localhost:3000/idea/create`,
        {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                category: category,
                description: description,
            }),
            headers: new Headers({
            'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .catch(error => {
        console.log('Create error', error);
        })
    }
    render(){
        return(
        <div>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                        <Input type="name" name='name' placeholder='Employee'value={this.state.name} onChange={this.handleChange} required/>
                </FormGroup>

                <FormGroup>
                        <Input name='category' placeholder='Category'value={this.state.category} onChange={this.handleChange} required/>
                </FormGroup>

                <FormGroup>
                        <Input name='description' placeholder='description'value={this.state.description} onChange={this.handleChange} required/>
                </FormGroup>
            
            <Button onclick = {this.handleSubmit.bind(this)}>
                Submit
            </Button>
            </Form>
        </div>
        )
    }
}



export default IdeaCreate