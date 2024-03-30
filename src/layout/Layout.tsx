import { ReactNode } from "react";
import styled from "styled-components";
import Rectangle from "../assets/rectangle.png";
import SearchInputContextProvider from "../context/SearchInputContext";

const Wrapper = styled.div`
  position: relative;
  background-color: var(--primary-background);
  height: 100vh;
  overflow: hidden;
`;

const ImageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Wrapper>
      <ImageBackground
        src={Rectangle}
        alt="Rectangle for decoration"
      />

      <SearchInputContextProvider>
        <ContentWrapper>{children}</ContentWrapper>
      </SearchInputContextProvider>
    </Wrapper>
  );
}
