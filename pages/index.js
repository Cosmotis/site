import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Text = styled.h1`
  font-size: 2em;
  font-weight: 300;
  color: #fff;
  user-select: none;
`;

export default () => (
  <React.Fragment>
    <Head>
      <title>Cosmotis</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Text>Coming Soon</Text>
  </React.Fragment>
);
