import React from "react";
import styled from "styled-components";

const Loading = () => {
  const imgLink = "https://i.gifer.com/4xjS.gif";
  return (
    <Wrapper>
      <img src={imgLink} alt="loading" />
      <h3>Loading...</h3>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
  }
`;
