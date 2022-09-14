import React from "react";
import styled from "styled-components";
import Logo from "../ImgComponent/Logo";
import qs from "qs";

const CLIENT_ID =
  "289023681545-qjiouf8mc6tc8ndkkvvuk1prs9cuk921.apps.googleusercontent.com";
const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

const queryStr = qs.stringify({
  client_id: CLIENT_ID,
  redirect_uri: "http://localhost:3000/",
  response_type: "token",
  scope: "https://www.googleapis.com/auth/contacts.readonly",
});

const loginUrl = AUTHORIZE_URI + "?" + queryStr;

export default function SignUpPage() {
  return (
    <>
      <SignBackground>
        <Background>
          <Logo />
          <Share>Share your information</Share>
          <Button href={loginUrl}/>
        </Background>
      </SignBackground>
    </>
  );
}

const Button = styled.a`
  width: 200px;
  height: 200px;
  background-color: #000000;
`;
const SignBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #a9f5a9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 520px;
  height: 600px;
  background-color: white;
  display: grid;
  place-content: center;
`;

const Share = styled.p`
  color: #8e8e8e;
  font-size: 13px;
`;
