import React from "react";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { newmessage } from "../../../redux";
import Spinner from "react-spinkit";



// import { UPDATE_MESSAGE } from "../../../actions/messages";







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
            
            <form id="message-update" onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="text"
                onChange={this.handleChange}/>
                <button type="submit"
                disabled={loading}>Submit</button>
            </form>
            <Link href="/" variant="body2">
                  {"Homepage"}
                </Link>
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
          