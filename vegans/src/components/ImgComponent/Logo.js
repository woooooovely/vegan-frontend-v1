import React from "react";
import styled from "styled-components";
import logo from "../Img/Logo.png";

export default function Logo() {
  return (
    <>
      <Logos src={logo} />
    </>
  );
}
const Logos = styled.img`
  width: 170px;
  height: 50px;
`;