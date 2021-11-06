import React from 'react';



class IdeaIndex extends React.Component{
    constructor(props){
        super(props)
        this.state={
            idea:[],
            user:[],
            comment:[]
        };
        this.getIdeas = this.getIdeas.bind(this);
        // this.getComments = this.getComments.bind(this);
        // this.getUsers = this.getUsers.bind(this);
        
    }
    getIdeas = () => {
        fetch(`http://localhost:3000/idea`,{
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.token,
              }),
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({idea:data})
        })
        .catch(error => {
            console.log('Something went wrong. Please try again', error)
        })        
    }
    componentDidMount(){
        this.getIdeas()
    }

    // getUsers = () => {
    //     fetch(`http://localhost:3000/user`,{
    //         method: 'GET',
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //             Authorization: this.props.token,
    //           }),
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         this.setState({idea:data})
    //     })
    //     .catch(error => {
    //         console.log('Something went wrong. Please try again', error)
    //     })
    // }
    //     componentDidMount(){
    //         this.getUsers()
    //     }
    
    // getComments = () => {
    //         fetch(`http://localhost:3000/comment`,{
    //             method: 'GET',
    //             headers: new Headers({
    //                 "Content-Type": "application/json",
    //                 Authorization: this.props.token,
    //               }),
    //         })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({idea:data})
    //         })
    //         .catch(error => {
    //             console.log('Something went wrong. Please try again', error)
    //         })
    //     }
    //         componentDidMount(){
    //             this.getComments()
    //         }
    

    render(){
        return(
        <div>
            
            {this.state.idea.map((ideas) => (
                <div>
                <p>name: {ideas.name}</p>
                <p>description: {ideas.description}</p>
                <p>category: {ideas.category}</p>
                </div> 
            ))} 
             
                    
        </div>
        )
    }
}

export default IdeaIndex
