import React from 'react';
import { Button, Form, FormGroup, Input, ModalBody, ModalFooter, ModalHeader, Modal } from 'reactstrap';


class CommentCreate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            category:'',
            description:'',
            modal:false
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

        console.log(this.props.token);

        fetch(`http://localhost:3000/comment/create`,
        {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                category: category,
                description: description,
            }),
            headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: this.props.token
            })
        })
        .then((response) => response.json())
        .then((commentData) => {
            this.props.comments();
            this.setState({
                name:'',
                category:'',
                description:'',
            })
        })
        .catch(error => {
        console.log('Create error', error);
        })
    }

    toggle = () => {
        this.setState({modal: !this.state.modal});
    }
    render(){
        return(
        <div>
            <Button color="" onClick={this.toggle}>Comment</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Leave a comment here...</ModalHeader>
            <ModalBody>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                        <Input type="name" name='name' placeholder='Employee'
                        value={this.state.name} onChange={this.handleChange} required/>
                </FormGroup>

                <FormGroup>
                        <Input name='category' placeholder='Category'value={this.state.category} onChange={this.handleChange} required/>
                </FormGroup>

                <FormGroup>
                        <Input name='description' placeholder='description'value={this.state.description} onChange={this.handleChange} required/>
                </FormGroup>
                <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            </Form>
            </ModalBody>
            <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
        </div>
        )
    }
}



export default CommentCreate