import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

const userIsAuthenticated = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: "/",
  // If selector is true, wrapper will not redirect
  // For example let's check that state contains user data
  authenticatedSelector: state =>
    state.auth &&
    state.auth.login &&
    state.auth.login.result &&
    state.auth.login.result.token !== undefined,
  // A nice display name for this check
  wrapperDisplayName: "UserIsAuthenticated"
});

export default userIsAuthenticated;
