import React from 'react';
import { render } from '@testing-library/react';
import { Dashboard } from '../Dashboard';
import '@testing-library/jest-dom'

describe('Page Dashboard', () => {
  test('Verifica se a pagina Dashboard foi renderizada corretamente', () => {
    const { getByText } = render(<Dashboard />);
    const listYears = getByText("List years with multiple winners");
    const topThreeStudios = getByText("Top 3 studios with winners");
    const awardsRange = getByText("Producers with longest and shortest interval between wins");
    const movieByYear = getByText("List movie winners by years");
    expect(listYears).toBeInTheDocument();
    expect(topThreeStudios).toBeInTheDocument();
    expect(awardsRange).toBeInTheDocument();
    expect(movieByYear).toBeInTheDocument();
  });
});