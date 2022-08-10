import React from "react";
import styled from "styled-components";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

const Pagination = ({ totalPages, page, handleLeftClick, handleRightClick }) => {

  return (
    <Wrapper>
      <button onClick={handleLeftClick}><AiOutlineLeftCircle size={24} className="icon" /></button>
      <span>{page < 10 ? `0${page}` : page} of {totalPages}</span>
      <button onClick={handleRightClick}><AiOutlineRightCircle size={24} className="icon" /></button>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  button {
    background-color: var(--navy-blue);

    .icon {
    padding: 0;
    color: white;
  }
  }
`;