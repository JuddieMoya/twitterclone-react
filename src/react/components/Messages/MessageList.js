import React from "react";
import postMessage from "./Messages/Messages.js";
import messageList from "./redux/messagelistreducers.js";
import { connect} from "http2";
import Link from "@material-ui/core/Link";

import { newmessage } from "../../../redux";
import Spinner from "react-spinkit";



// import { UPDATE_MESSAGE } from "../../../actions/messages";







class MessageList extends React.Component {
    state = {
        text: "",
    }

    

handleSubmit = (e) => {
    e.preventDefault();
    this.props.messageList(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



    render() {
        const { loading, error } = this.props;
        return (
            <div>
            <h1>Messages</h1>
            
            
            </div>
            )
    }
    }
    const mapStateToProps = state => {
        return {
            message: state.messages.messageList.result
        }
    }
const mapDispatchToProps = {messageList}

        export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
            
            
            