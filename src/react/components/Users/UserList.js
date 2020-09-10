import React from "react";

class UserList extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          error : null,
          isLoaded : false,
          users : []          
      };
  }

  componentDidMount(){
      fetch("https://kwitter-api.herokuapp.com/users?limit=15&offset=0")
      .then( response => response.json())
      .then(
          // handle the result
          (result) => {
              this.setState({
                  isLoaded : true,
                 users : result.users
              });
          },

          // Handle error 
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              })
          },
      )
  }

  render() {
      const {error, isLoaded, users} = this.state;

      if(error){
          return <div>Error in loading</div>
      }else if (!isLoaded) {
          return <div>Loading ...</div>
      }else{
          return(
              <div>
                  <ol className="item">
                  {
                     users.map(user => (
                          <li key={user.username} align="start">
                              <div>
                                  <p className="title">{user.username}</p>
                                  <p className="body">{user.displayName}</p>
                              </div>
                          </li>
                      ))
                  }
                  </ol>
              </div>
          );
      }
    
  }
}

export default UserList;
