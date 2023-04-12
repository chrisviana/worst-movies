import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #b7b7b7;

  button {
    width: 35px;
    height: 35px;
    border: none;
    background-color: #b7b7b7;

    &.active {
      background-color: #047de0;
      color: #fff;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
