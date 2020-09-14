import React from "react";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { deletemessage } from "../../../redux";
import Spinner from "react-spinkit";
import MessageList from "./MessageList"
import Menu from "../Menu/Menu"
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Container from "@material-ui/core/Container";

import "./Messages.css";






function refreshPage() {
  setInterval(function(){window.location.reload(false);; }, 1000)
  }


class DeleteMessage extends React.Component {
  


    

handleDelete = (e) => {
    e.preventDefault();
    this.props.deletemessage(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



    render() {
        const { loading, error } = this.props;
        return (

          
            <div>
           
           
          
        
            
            <Form id="message-update" onSubmit={this.handleDelete}>
                <Button type="submit"
                disabled={loading}
                color='red'
                content='Delete Message'
                labelPosition='left' 
                icon='trash alternate'
                onClick={refreshPage} 
               />
            </Form>
           
                <br/>
            
                {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
            )
    }
    }
        

        export default connect(
            (state) => ({
                result: state.messages.deletemessage.result,
                loading: state.messages.deletemessage.loading,
                error: state.messages.deletemessage.error,
            
            }),
            { deletemessage }
          )(DeleteMessage);
          