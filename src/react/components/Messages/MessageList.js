import React, { Component } from 'react';

// get posts from online api
// it's return a json file
class MessageList extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            messages : []          
        };
    }

    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        fetch("https://kwitter-api.herokuapp.com/messages?limit=15&offset=0")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    messages : result.messages
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, messages} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol className="item">
                    {
                        messages.map(message => (
                            <li key={message.id} align="start">
                                <div>
                                    <p className="title">{message.username}</p>
                                    <p className="body">{message.text}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }
  
  export default MessageList;