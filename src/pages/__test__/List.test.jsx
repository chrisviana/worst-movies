import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "../List";
import "@testing-library/jest-dom";

describe("Page List", () => {
  test("Verifica se a pagina List foi renderizada corretamente", () => {
    render(<List />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
