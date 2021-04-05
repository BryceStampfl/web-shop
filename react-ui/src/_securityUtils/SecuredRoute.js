import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

export const SecuredRoute = (props) => {

  const security = useSelector(state => state.users.validToken)
  
  
  return(
  <Route
    {...props}
    render={props =>
      security.validToken === true ? (
        <props.component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
  )}

export default SecuredRoute;