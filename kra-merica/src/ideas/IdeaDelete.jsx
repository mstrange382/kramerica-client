import React from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class IdeaDelete extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modal:false,
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = (e) => {

        console.log('Hello!!');

        fetch(`http://localhost:3000/idea/delete/${this.props.idea.id}`,
        {   method: 'DELETE',            
            headers: new Headers({
            'Content-Type': 'application/json',
            authorization: this.props.token
            })
        })
        .then((response) => response.json())
        .catch(error => {
        console.log('Create error', error);
        })
        this.refreshPage()
    }

    refreshPage = () => {
        setTimeout(() => {
          window.location.reload();
        });
      };

    toggle = () => {
        this.setState({modal: !this.state.modal});
    }
    render(){
        return(
        <div>
            <Button color='danger' onClick={this.toggle}>Delete</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Delete</ModalHeader> 
            <ModalBody>
                <Button type='delete' onClick={this.handleDelete}>Delete</Button>
            </ModalBody>
            </Modal>
        </div>
        )
    }
}

export default IdeaDelete