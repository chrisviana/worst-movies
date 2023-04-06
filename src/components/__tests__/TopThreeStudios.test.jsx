import React from 'react'
import { render,  waitFor } from '@testing-library/react';
import { TopThreeStudios } from '../TopThreeStudios';
import "@testing-library/jest-dom"

jest.mock('../../service/api', () => ({
  getStudios: jest.fn(() => ({
    data: {
      studios: [
        { name: 'Studio A', winCount: 10 },
        { name: 'Studio B', winCount: 8 },
        { name: 'Studio C', winCount: 6 },
      ],
    },
  })),
}));

describe('Componente TopThreeStudios', () => {
  it('Deve renderizar uma table com os três estudios', async () => {
    const { getByText, getAllByRole} = render(<TopThreeStudios />);

    expect(getByText('Top 3 studios with winners')).toBeInTheDocument();

    await waitFor(() => expect(getAllByRole('row')).toHaveLength(4));

    expect(getByText('Studio A')).toBeInTheDocument();
    expect(getByText('Studio B')).toBeInTheDocument();
    expect(getByText('Studio C')).toBeInTheDocument();

    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();
  });
});