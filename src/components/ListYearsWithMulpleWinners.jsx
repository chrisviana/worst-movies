import { useEffect, useState } from 'react';
import { getyearsWithMoreThanOneWinner } from '../service/api';
import { TableContainer, InfoTable } from '../styles/global';

export function ListYearsWithMulpleWinners(){
  const [yearsWinners, setYearsWinners] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getyearsWithMoreThanOneWinner();
      setYearsWinners(result.data.years)
    }

    fetchData();
  },[])

  const headName = ['Year', 'Name']

  return (
    <TableContainer>
    <h2>List years with multiple winners</h2>
    <InfoTable>
      <thead>
        <tr>
          {
            headName.map((name) => {
              return <th key={name}>{name}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          yearsWinners.map((info) =>{
            return (
              <tr key={info.year}>
                <td>{info.year}</td>
                <td>{info.winnerCount}</td>
              </tr>
            )
          })
        }
      </tbody>
    </InfoTable>
   </TableContainer>
  )
}