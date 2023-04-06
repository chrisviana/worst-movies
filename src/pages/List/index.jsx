import { useEffect, useState } from 'react'
import { Table } from './components/Table'
import { getMovieData } from '../../service/api'

export function List() {
  const [listMovie, setListMovie] = useState([{}])
  const [year, setYear] = useState()
  const [winner, setWinner] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const result = await getMovieData()
      setListMovie(result.data.content)
    }
    fetchData()
  },[])

  useEffect(() => {
    async function fetchDataYear() {
      const result = await getMovieData(year, winner)
      setListMovie(result.data.content)
      setCurrentPage(1)
    }

    async function fetchDataWinner() {
      const result = await getMovieData(year,winner)
      setListMovie(result.data.content)
      setCurrentPage(1)
    }

    fetchDataYear()
    fetchDataWinner()
  },[year, winner])

  function handleSarchByYear(event){
   setYear(event.target.value)
  }

  function handleSarchWinner(event){
    setWinner(event.target.value)
  }

  return (
    <Table 
      data={listMovie} 
      handleSarchByYear={handleSarchByYear} 
      handleSarchWinner={handleSarchWinner}
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
    />
  )
}