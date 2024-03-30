import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 100px;
  padding-right: 100px;
`;

export default function Container({
  children,
}: {
  children?: ReactNode;
}) {
  return <StyledContainer>{children}</StyledContainer>;
}
