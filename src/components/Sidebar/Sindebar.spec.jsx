import React from 'react'
import { Sidebar } from '.'
import { render, screen, fireEvent  } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom"

describe('Componente Sidebar', () => {
  test('Verifica se sidebar está renderizando corramente com seus links', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const dashboardLink = screen.getByText(/dashboard/i);
    const listLink = screen.getByText(/list/i);

    expect(dashboardLink).toBeInTheDocument();
    expect(listLink).toBeInTheDocument();
  });

  test('Valida se ao clicar em um link a classe Active esta sendo adicionada', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const dashboardLink = screen.getByText(/dashboard/i);
    const listLink = screen.getByText(/list/i);

    fireEvent.click(listLink);

    expect(dashboardLink).not.toHaveClass('active');
    expect(listLink).toHaveClass('active');
  });
});