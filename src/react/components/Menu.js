import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { updateUser } from "../../redux/users";
import { logout } from "../../redux";
import userInfo from './user.json';

class Menu extends React.Component {
  

  // handleLogout = event => {
  //   event.preventDefault();
  //   updateUser('');
  //   this.props.logout();
  // };
  
  render() {
    return (
      <div id="menu">
        <div id='info'>
          <h2 className='userInfo' id='displayName'>{this.props.displayName}</h2>
          {/* <p className='userInfo'>{this.state.info.user.about}</p> */}
        </div>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/">Profile</Link>
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}
  
//   render() {
//     return (
//       <div id="menu">
//         <h1>Kwitter</h1>
//         {this.props.isAuthenticated && (
//           <div id="menu-links">
//             <Link to="/messagefeed">Message Feed</Link>
//             <Link to="/" onClick={this.handleLogout}>
//               Logout
//             </Link>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default connect(
  state => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error
  }),
  { logout }
)(Menu);
