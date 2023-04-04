import styled from 'styled-components';


export const TableContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  box-shadow: 1px 1px #e5e5e5;
  padding: 1rem;

`
export const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 0.5rem;
  margin-top: 1rem;

  th {
    background-color: #b7b7b7;
    padding: 0.5rem;
    text-align: left;
    border: 1px solid #dddddd;
    width: 100px;
  }

  td {
    padding: 0.5rem;
    text-align: left;
    border: 1px solid #dddddd;
    width: 100px;
  }

  tr:nth-child(2) {
    background-color: #e2e2e2;
  }
`
