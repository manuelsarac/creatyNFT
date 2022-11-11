import React, { useEffect, useState, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import * as s from "../styles/globalStyles";
import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border-radius: 10%;
  transition: width 0.5s;
`;

function Ethereum() {
  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={"/config/images/bg.png"}
      >
        <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
        <s.SpacerLarge />
        <s.Container
              flex={2}
              style={{
                backgroundColor: "#ffffff",
                padding: 24,
                borderRadius: 10,
                border: "#000000",
                boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                width: "50%",
                margin: "0 auto",
              }}
          >
            <s.Container
            ai={"center"}
            style={{
              borderBottom: "2px solid #808080",
            }}>
              <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: 20,
              }}
              >
                Inserisci l'uri
              </s.TextTitle>
            </s.Container>
          </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default Ethereum;