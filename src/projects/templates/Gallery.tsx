import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";

import useURL from "hooks/useURL";
import Link from "components/Link";
import { resetLink } from "styles/Mixins";

import Projects from "data/Projects.json";

const Gallery = () => (
  <Container>
    <Description>
      더 자세한 정보는{" "}
      <Link
        css={css`
          text-decoration: underline;
        `}
        href="https://github.com/Avantgarde95"
      >
        Github
      </Link>
      에 있습니다.
    </Description>
    {Projects.map(project => (
      <Item key={project.name}>
        <Preview repositoryURL={project.repositoryURL} imageURL={project.imageURL} alt={project.name} />
        <Name>{project.name}</Name>
      </Item>
    ))}
  </Container>
);

const Container = styled.div`
  width: 100%;
`;

const Description = styled.div`
  text-align: center;

  width: 100%;
  font-size: 17px;
  font-weight: 400;

  color: ${({ theme }) => theme.color.blue};
`;

const Item = styled.div`
  margin-top: 14px;
  margin-bottom: 14px;
`;

interface PreviewProps {
  repositoryURL: string;
  imageURL: string;
  alt: string;
}

const Preview = ({ repositoryURL, imageURL, alt }: PreviewProps) => {
  const { isValidURL } = useURL(imageURL);
  const theme = useTheme();

  return (
    <Link
      css={css`
        ${resetLink}

        box-sizing: border-box;
        display: block;

        height: 264px;
        max-width: 478px;
        margin-left: auto;
        margin-right: auto;
        background-color: ${theme.color.gray1};

        img {
          width: 100%;
          height: 264px;
          max-width: 478px;

          object-fit: contain;
        }
      `}
      href={repositoryURL}
    >
      {isValidURL && <img src={imageURL} alt={alt} />}
    </Link>
  );
};

const Name = styled.div`
  text-align: center;

  width: 100%;
  margin-top: 12px;
  margin-bottom: 14px;
  font-size: 17px;
  font-weight: 400;
`;

export default Gallery;