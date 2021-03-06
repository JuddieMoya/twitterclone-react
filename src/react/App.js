import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm"
import Messages from "./components/Messages/Messages";
import MessageList from "./components/Messages/MessageList"
import DeleteMessage from "./components/Messages/DeleteMessage";
import AddLike from "./components/Likes/AddLike";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/signUp" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/messagefeed" component={Messages} />
        <Route exact path="/messagelist" component={MessageList} />
        <Route exact path="/delMsg" component={DeleteMessage} />
        <Route exact path="/likes" component={AddLike} />
        <Route path="*" component={NotFound} />


      </Switch>
    );
  }
}

export default App;
