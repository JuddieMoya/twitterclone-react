import React from "react";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { newmessage } from "../../../redux";
import Spinner from "react-spinkit";
import MessageList from "./MessageList"

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
            
            <div>
               
            <h1>Messages</h1>
            <MessageList />
        
            
            <form id="message-update" onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="text"
                onChange={this.handleChange}/>
                <button type="submit"
                disabled={loading}
                onClick={refreshPage}>Submit</button>
            </form>
            <Link href="/" variant="body2">
                  {"Homepage"}
                </Link>
                <br/>
            <Link href="/messagelist" variant="body2">
            {"Message List"}</Link>
                {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
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
          