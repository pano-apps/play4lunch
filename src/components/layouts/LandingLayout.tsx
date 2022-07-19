import { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  children: ReactElement;
};

const LandingLayout: React.FC<Props> = ({ children }) => {
  return <OuterWrapper>{children}</OuterWrapper>;
};

export default LandingLayout;

const OuterWrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;
`;
