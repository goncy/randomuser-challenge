import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import UserCard from "../components/UserCard";
import { useUsers } from "../hooks";

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const BottomLine = styled.div`
  width: 0;
  height: 0;
  opacity: 0;
`;

function ListScreen() {
  const [users, fetchMore] = useUsers();
  const bottom = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      intersections => {
        const isShowing = intersections[0].isIntersecting;

        if (isShowing) {
          fetchMore();
        }
      },
      {
        rootMargin: "45px",
        threshold: 1,
      }
    );

    observer.observe(bottom.current);
  }, [fetchMore]);

  return (
    <>
      <h1>Usuarios:</h1>
      <Container>
        {users.map(user => {
          return (
            <Link key={user.email} to={`/users/${user.email}`}>
              <UserCard user={user} />
            </Link>
          );
        })}
      </Container>
      <BottomLine ref={bottom} />
    </>
  );
}

export default ListScreen;
