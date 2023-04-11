import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../Header";
import "@testing-library/jest-dom";

describe("Componente Header", () => {
  test("Verifica se o Header está renderizando corramente", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Front End React Test")).toBeInTheDocument();
  });
});
