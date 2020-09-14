import React, { Component } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Drawer } from "@material-ui/core";

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

  render() {
    const { error, isLoaded, messages } = this.state;

    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <Comment.Group>
          <Header as="h1" dividing>
            Messages
          </Header>
          <ol className="item">
            {messages.map((message) => (
              <li key={message.id} align="start">
                <Comment>
                  <Comment.Author>
                    {
                      <strong>
                        <u>{message.username}</u>
                      </strong>
                    }
                  </Comment.Author>
                  <Comment.Text>{message.text}</Comment.Text>
                  <Comment.Metadata>
                    {<em>id: {message.id}</em>}
                  </Comment.Metadata>
                </Comment>
                <br />
              </li>
            ))}
          </ol>
        </Comment.Group>
      );
    }
  }
}

export default MessageList;
