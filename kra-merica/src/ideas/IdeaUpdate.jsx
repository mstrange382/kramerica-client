import React from 'react';
import { Button, Form, FormGroup, Input, Label, } from 'reactstrap';

class IdeaUpdate extends React.Component{
        constructor(props){
            super(props)
            this.state={
                category: this.props.ideaId,
                description: this.props.ideaId
            }
            this.handleUpdate = this.handleUpdate.bind(this);
            this.handleChange = this.handleChange.bind(this)
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
render(){
    return(
        <Form onSubmit={this.handleUpdate}>
            <FormGroup>
                <Input
                name="category"
                value={this.state.category}
                onChange={this.handleChange} required/>
            </FormGroup>

            <FormGroup>
                <Input
                name="description"
                value={this.state.description}
                onChange={this.handleChange} required/>
            </FormGroup>
        </Form>
    )
}
}
export default IdeaUpdate