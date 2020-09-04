import React from "react";
import Redux from "react-redux";
import { UPDATE_MESSAGE } from "../../actions/messages";

class Messages extends React.Component {
    render() {
        return (
            <div>
            <h1>Messages</h1>
            <form id= "message-update" onSubmit ={UPDATE_MESSAGE}>
                <input
                type="message"
                text="message"
                onChange={this.UPDATE_MESSAGE}/>
                <button type="submit">Submit</button>
            </form>
            </div>
            )
    }
    
    }
        
        export default Messages;