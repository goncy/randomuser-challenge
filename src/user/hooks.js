import React from "react";

import UserContext from "./context";

export const useUsers = () => {
  const { state, actions } = React.useContext(UserContext);

  return [state.users, actions.fetchMore];
};

export const useUser = email => {
  const { state } = React.useContext(UserContext);

  return state.users.find(user => user.email === email);
};
