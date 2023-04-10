import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { ListYearsWithMulpleWinners } from '../ListYearsWithMulpleWinners'
import { getyearsWithMoreThanOneWinner } from '../../service/api'
import '@testing-library/jest-dom'

jest.mock('../../service/api', () => ({
  getyearsWithMoreThanOneWinner: jest.fn(() => ({
    data: {
      years: [
        { year: '2000', winnerCount: 2 },
        { year: '2002', winnerCount: 3 },
        { year: '2006', winnerCount: 4 },
      ],
    },
  })),
}))

describe('Componente ListYearsWithMulpleWinners', () => {
  test('Verifica se o componente ListYearsWithMulpleWinners renderiza a tabela com varios vencedores', async () => {
    const { getByText } = render(<ListYearsWithMulpleWinners />)

    await waitFor(() => expect(getyearsWithMoreThanOneWinner).toHaveBeenCalledTimes(1))

    expect(getByText('List years with multiple winners')).toBeInTheDocument()

    expect(getByText('Year')).toBeInTheDocument()
    expect(getByText('Win Count')).toBeInTheDocument()
    expect(getByText('2000')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('2002')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('2006')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
  })
})