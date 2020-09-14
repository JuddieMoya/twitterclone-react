import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

fetch("https://kwitter-api.herokuapp.com/users?limit=15&offset=0")
  .then((res) => res.json())
  .then((data) => console.log(data));

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://kwitter-api.herokuapp.com/users?limit=15&offset=0")
      .then((response) => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            users: result.users,
          });
        },

        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;

    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Recently created users
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Display Name</TableCell>
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.username} align="start">
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.displayName}</TableCell>
                  <TableCell>{user.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* <ol className="item">
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
                  </ol> */}
        </div>
      );
    }
  }
}

export default UserList;
