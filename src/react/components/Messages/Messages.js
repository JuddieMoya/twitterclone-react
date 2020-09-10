import React from "react";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { newmessage } from "../../../redux";
import Spinner from "react-spinkit";
import MessageList from "./MessageList"
import Menu from "../Menu/Menu"
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Container from "@material-ui/core/Container";

import "./Messages.css";

fetch('https://kwitter-api.herokuapp.com/messages?limit=15&offset=0')
.then(response => response.json())
.then(text => console.log(text.messages));

function refreshPage() {
    window.location.reload(false);
  }



class postMessage extends React.Component {
    state = {
        text: "",
    }

    

handleSubmit = (e) => {
    e.preventDefault();
    this.props.newmessage(this.state);
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
                name="text"
                onChange={this.handleChange}/>
                <Button type="submit"
                disabled={loading}
                onClick={refreshPage} 
                content='Add Message'
                labelPosition='left' 
                icon='edit'
                primary />
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
                result: state.messages.newmessage.result,
                loading: state.messages.newmessage.loading,
                error: state.messages.newmessage.error,
            
            }),
            { newmessage }
          )(postMessage);
          