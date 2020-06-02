import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) =>
    `/profiles/${state.auth &&
      state.auth.login &&
      state.auth.login.result &&
      state.auth.login.result.username}`,
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
  // If selector is true, wrapper will not redirect
  // So if there is no user data, then we show the page
  authenticatedSelector: state =>
    state.auth && state.auth.login && state.auth.login.result === null,
  // A nice display name for this check
  wrapperDisplayName: "UserIsNotAuthenticated"
});

export default userIsNotAuthenticated;
