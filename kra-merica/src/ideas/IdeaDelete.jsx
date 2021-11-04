import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';


class IdeaDelete extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            category:'',
            description:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {

        e.preventDefault();

        const {
            name,
            category,
            description
        } = this.state

        console.log('Hello!!');

        fetch(`http://localhost:3000/idea/create`,
        {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                category: category,
                description: description
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
            <Button/>
            <Form>
                <FormGroup>
                        <Input name='name' placeholder='Employee'value={this.state.name} onchange={this.handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Input placeholder='Submit your idea' name='idea' value={this.state.description} onChange={this.handleChange}/>
                </FormGroup>
            </Form>

        </div>
        )
    }
}




export default IdeaDelete