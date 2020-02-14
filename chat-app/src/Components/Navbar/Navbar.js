import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #3da1ff;
  color: #f4f4f4;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <h1>
        <i class="far fa-comment"></i> Future chat
      </h1>
    </NavContainer>
  );
};

export default Navbar;
