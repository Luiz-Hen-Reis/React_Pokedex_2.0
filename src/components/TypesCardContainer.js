import React from "react";
import styled from "styled-components";
import { typeColors } from "../utils/typeColors";

const TypesCardContainer = ({ type }) => {
  return (
    <Wrapper theme={`${typeColors[type]}`}>
      <p>{type}</p>
    </Wrapper>
  );
};

export default TypesCardContainer;

const Wrapper = styled.div`
  padding: 5px;
  border-radius: var(--border-radius);
  color: var(--white-text);
  background-color: ${(props) => props.theme}; 
  
  p {
    margin: 0;
    text-transform: capitalize;
  }
`;