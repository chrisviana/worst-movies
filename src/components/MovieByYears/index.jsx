import { MagnifyingGlass } from '@phosphor-icons/react';
import { TableContainer } from '../../styles/global';

export function MovieByYear(){
  return (
    <TableContainer>
      <h2>List movie winnerrs by years</h2>
      <div>
        <input type="number" />
        <MagnifyingGlass size={24} color="#ff0000" weight="bold" />
      </div>
      
    </TableContainer>
  )
}