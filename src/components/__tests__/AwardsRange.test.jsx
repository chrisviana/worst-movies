import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { AwardsRange } from '../AwardsRange'
import '@testing-library/jest-dom'

jest.mock('../../service/api', () => ({
  getPrizeRange: jest.fn(() => ({
    data: {
      max: [
        {producer: 'Producer 1', interval: 10},
      ],
      min: [
        {producer: 'Producer 2', interval: 2},
      ]
    },
  })),
}));

describe('Componente AwardsRange ', () => {
  test('Verifica  o AwardsRange está renderizando corramente', async () => {
    const { getByText } = render(<AwardsRange />)
  
    expect(getByText('Producers with longest and shortest interval between wins')).toBeInTheDocument()
    expect(getByText('Maximum')).toBeInTheDocument()
    expect(getByText('Minimum')).toBeInTheDocument()
    
    await waitFor(() => {
      expect(getByText('Producer 1')).toBeInTheDocument()
      expect(getByText('10')).toBeInTheDocument()

      expect(getByText('Producer 2')).toBeInTheDocument()
      expect(getByText('2')).toBeInTheDocument()
    })
  })
})