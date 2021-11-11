import React from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class CommentUpdate extends React.Component{
        constructor(props){
            super(props)
            this.state={
                category: this.props.ideaId,
                description: this.props.ideaId,
                modal: false,
            }
            this.handleUpdate = this.handleUpdate.bind(this);
            this.handleChange = this.handleChange.bind(this);
            
        }

        handleChange(e){
            this.setState({
              [e.target.name]: e.target.value
            })
          }

        handleUpdate = (e) => {
              e.preventDefault();
              const {
                  category,
                  description
              } = this.state;

              console.log(this.props.token);

        fetch(`http://localhost:3000/idea${this.state.ideaId}`,
              {
                  method: 'PUT',
                  body: JSON.stringify({
                      category: category,
                      description: description
                  }),
                  headers: new Headers({
                      'Content-Type':'application/json',
                      authorization: this.props.token
                  })
              })
              .then((response) => response.json())
              .catch(error => {
                  console.log('Create error', error)
              })
              this.refreshPage();
          };
          refreshPage = () => {
              setTimeout(() => {
                  window.location.reload()
              })
          }
         toggle = () => {
             this.setState({modal: !this.state.modal});
         }

render(){
    console.log(this.props.ideas)
    return(
        <div>
        <Button color="danger" onClick={this.toggle}>Update</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Update Your Idea</ModalHeader>
        <ModalBody >
          <Form onSubmit={this.handleUpdate}>
        
            <FormGroup>
                Category:
                <Input
                name="category"
                value={this.state.category}
                onChange={this.handleChange} required/>
            </FormGroup>

            <FormGroup>
                Description:
                <Input
                name="description"
                value={this.state.description}
                onChange={this.handleChange} required/>
            </FormGroup>  
        </Form> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}
}
export default CommentUpdate