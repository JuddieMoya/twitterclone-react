import React from "react";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { addlike } from "../../../redux"
import Spinner from "react-spinkit";
import MessageList from "../Messages/MessageList"
import Menu from "../Menu/Menu"
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Container from "@material-ui/core/Container";
import DeleteMessage from "../Messages/DeleteMessage"

import "../Messages/Messages.css";

fetch('https://kwitter-api.herokuapp.com/messages?limit=15&offset=0')
.then(response => response.json())
.then(text => console.log(text.messages));

// function refreshPage() {
//   setInterval(function(){window.location.reload(false);; }, 500) 
//   }



class AddLike extends React.Component {
    state = {
        messageId: "",
    }

    

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addlike(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



    render() {
        const { loading, error } = this.props;
        return (

          
            <Container fixed>
                <Menu />
                <Link href="/" variant="body2">
                  {<h1>Homepage</h1>}
                </Link>
               <MessageList />
           
          
        
            
            <Form id="message-update" onSubmit={this.handleSubmit}>
                <Form.TextArea
                type="text"
                name="messageId"
                onChange={this.handleChange}/>
                <Button.Group>
                <Button type="submit"
                disabled={loading}
                // onClick={refreshPage} 
                content='Like'
                labelPosition='left' 
                icon='thumbs up'
                primary />
                <DeleteMessage />
                </Button.Group>
             
            </Form>
           
                <br/>
            
                {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
            </Container>
            )
    }
    }
        

        export default connect(
            (state) => ({
                result: state.likes.addlike.result,
                loading: state.likes.addlike.loading,
                error: state.likes.addlike.error,
            
            }),
            { addlike }
          )(AddLike);
          