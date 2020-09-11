import React, { Component } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      messages: [],
    };
  }

  componentDidMount() {
    fetch("https://kwitter-api.herokuapp.com/messages?limit=15&offset=0")
      .then((response) => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            messages: result.messages,
          });
        },

        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  componentDidMount() {
    fetch("https://kwitter-api.herokuapp.com/likes")
      .then((response) => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            addLike: result.messageId,
          });
        },

        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, messages, addLike } = this.state;

    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <Comment.Group>
          <Header as="h3" dividing>
            Messages
          </Header>
          <ol className="item">
            {messages.map((message) => (
              <li key={message.id} align="start">
                <Comment>
                  <Comment.Author>
                    {<strong>{message.username}</strong>}
                  </Comment.Author>
                  <Comment.Text>{message.text}</Comment.Text>
                  <Comment.Metadata>
                    {<em>id: {message.id}</em>}
                  </Comment.Metadata>
                  
                </Comment>
                <br/>
              </li>
            ))}
          </ol>
          
        </Comment.Group>

      );
    }
  }
}

export default MessageList;
