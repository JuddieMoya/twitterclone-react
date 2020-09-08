import React, {Component} from "react";
import {Connect} from "react-redux";
import { UPDATE_MESSAGE } from "../../actions/messages";
import Card from  '@material-ui/core/Card';
import MessageIcon from '@material-ui/icons/Message';
import Button from '@material-ui/core/Button';
// import Messages from "./Messages.js";


class MessageFeed extends Component {
    state ={
        text:""
    
      }

      handleChange = (e) => {
          e.preventDefault();
          this.setState ({text: e.target.value}) 
      }
      handleNewMessage = (e) =>{
          e.preventDefault();
          this.props.UPDATE_MESSAGE(this.state.text)
          this.setState ({text:""})
      }
      
    render() {
      
        return (
                
            // <div>
            // <h1>Messages</h1>
           
           
            // </div>
            <>
            <Card className="newMessage">
            <form className= "messageUpdate">
                <input
                placeholder="messages"
                type="text"
                name="text"
                value={this.state.text}
                required
                onChange={this.handleChange}/>
            </form>
        
            <Button type= "submit" className="Submit" onClick={this.handleNewMessage}>
                Submit
                <MessageIcon name = "MessageIcon"/>
                </Button>
                {/* <Messages/> */}
            </Card>
<Card className="messageFeed">
    
</Card>
     </>
            
)
}

}
    
    export default MessageFeed;


