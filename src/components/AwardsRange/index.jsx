import { useEffect, useState } from 'react'
import { TableContainer } from '../../styles/global'
import { Table } from './components/Table'
import { getPrizeRange } from '../../service/api'

export function AwardsRange() {

  const [maximum, setMaximum] = useState([])
  const [minimum, setMinimum] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getPrizeRange()
      setMaximum(result.data.max)
      setMinimum(result.data.min)
    }

    fetchData()
  },[])


  return (
    <TableContainer>
      <h2>Producers with longest and shortest interval between wins</h2>
      <Table subtitle="Maximum" infos={maximum}/>
      <Table subtitle="Minimum" infos={minimum}/>
    </TableContainer>
  
  )
}