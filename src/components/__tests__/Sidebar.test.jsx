import React from "react";
import { Sidebar } from "../Sidebar";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Componente Sidebar", () => {
  test("Verifica se o sidebar está renderizando corramente com seus links", () => {
    const { getByText } = render(
      <Router>
        <Sidebar />
      </Router>
    );

    const dashboardLink = getByText(/dashboard/i);
    const listLink = getByText(/list/i);

    expect(dashboardLink).toBeInTheDocument();
    expect(listLink).toBeInTheDocument();
  });

  test("Valida se ao clicar em um link a classe Active esta sendo adicionada", () => {
    const { getByText } = render(
      <Router>
        <Sidebar />
      </Router>
    );

    const dashboardLink = getByText(/dashboard/i);
    const listLink = getByText(/list/i);

    fireEvent.click(listLink);

    expect(dashboardLink).not.toHaveClass("active");
    expect(listLink).toHaveClass("active");
  });
});
