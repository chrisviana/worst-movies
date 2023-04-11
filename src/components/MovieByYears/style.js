import styled from "styled-components";

export const ContentSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
  height: 35px;

  input {
    width: 90%;
    border-radius: 4px;
    height: 100%;
    border: 1px solid #dddddd;
    padding: 0.5rem;
  }

  button {
    background-color: #047de0;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    height: 100%;
  }

  button:hover {
    background-color: #0368ba;
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;
