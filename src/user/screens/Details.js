import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useUser } from "../hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailsScreen = ({
  match: {
    params: { email },
  },
}) => {
  const user = useUser(email);

  if (!user)
    return (
      <span>
        El usuario no existe, por favor intentelo nuevamente o vaya al <Link to="/users">listado de usuarios</Link>
      </span>
    );

  return (
    <Container>
      <h1>
        {user.name.first} {user.name.last}
      </h1>
      <img alt="User face" src={user.picture.large} />
      <h4>{user.email}</h4>
      <h4>{user.login.username}</h4>
    </Container>
  );
};

export default DetailsScreen;
