import { useEffect, useState } from 'react'
import { getStudios } from '../../service/api'
import { TableContainer, InfoTable } from '../../styles/global'

export function TopThreeStudios(){
  const [studios, setStudios] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getStudios()
      const sortedStudios = result.data.studios.sort((a, b) => b.winCount - a.winCount)
      const topThreeStudios = sortedStudios.slice(0, 3)

     setStudios(topThreeStudios)
    }

    fetchData()
  },[])

  const headName = ['Name', 'Win Count']

  return (
    <TableContainer>
    <h2>Top 3 studios with winners</h2>
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
          studios.map((info) =>{
            return (
              <tr key={info.name}>
                <td>{info.name}</td>
                <td>{info.winCount}</td>
              </tr>
            )
          })
        }
      </tbody>
    </InfoTable>
   </TableContainer>
  )
}