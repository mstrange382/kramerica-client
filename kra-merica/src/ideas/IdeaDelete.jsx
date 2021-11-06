import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';


class IdeaDelete extends React.Component{
    constructor(props){
        super(props);
        
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = (e) => {

        console.log('Hello!!');

        fetch(`http://localhost:3000/idea/delete`,
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
    }
    render(){
        return(
        <div>
            <Button onClick={this.handleDelete}>
                Delete
            </Button> 
        </div>
        )
    }
}

export default IdeaDelete