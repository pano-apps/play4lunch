import { LandingLayout } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <LandingLayout>
      <Box />
    </LandingLayout>
  );
};

export default Home;

const Box = styled.div`
  background-color: red;
  height: 300px;
  width: 300px;
`;
