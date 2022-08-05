import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import StatusBar from "layout/templates/StatusBar";
import { resetButton, resetTitle } from "styles/Mixins";

import MenuIcon from "layout/assets/Menu.svg";

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page = ({ title, children }: PageProps) => (
  <Container>
    <Inner>
      <StatusBar />
      <Header>
        <MenuButton>
          <MenuIcon />
        </MenuButton>
        <Title>{title.toUpperCase()}</Title>
        <div css={headerEnd} />
      </Header>
      {children}
    </Inner>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1000px;
`;

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 18px 20px;
`;

const Title = styled.h1`
  ${resetTitle}

  text-align: center;

  flex: 1;
  font-size: 21px;
  font-weight: 700;
`;

const headerEnd = css`
  width: 24px;
  height: 24px;
`;

const MenuButton = styled.button`
  ${resetButton}
  ${headerEnd}

  margin-right: auto;
`;

export default Page;
