import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  background: #444;
  color: #f4f4f4;
`;

const HeartColor = styled.span`
  color: red;
`;

const Footer = () => {
  return (
    <FooterContainer>
      Feito com &nbsp;
      <HeartColor>
        <i class="fas fa-heart"></i>
      </HeartColor>
      &nbsp; por Filipe Virtuoso e Thales Milanezi.
    </FooterContainer>
  );
};

export default Footer;
