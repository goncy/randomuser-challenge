import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid gainsboro;
  border-radius: 8px;
  padding: 32px;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 16px 15px -4px rgba(0, 0, 0, 0.21);
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    min-width: 64px;
    border-radius: 50%;
    margin-right: 12px;
  }
`;

const UserCard = ({ user }) => (
  <Container>
    <Title>
      <img alt="User face" src={user.picture.thumbnail} />
      <h4>
        {user.name.first} {user.name.last}
      </h4>
    </Title>
    <h6>{user.email}</h6>
  </Container>
);

export default UserCard;
