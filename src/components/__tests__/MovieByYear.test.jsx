import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MovieByYear } from "../MovieByYears";
import * as api from "../../service/api";

import "@testing-library/jest-dom";

jest.mock("../../service/api", () => ({
	getFilmByYear: jest.fn(() => ({
		data: [
			{ id: 1, year: 2020, title: "Movie 1" },
			{ id: 2, year: 2020, title: "Movie 2" },
		],
	})),
}));

describe("Componente MovieByYear", () => {
	test("Verifica se o componente MovieByYear está renderizando corramente", () => {
		const { getByText } = render(<MovieByYear />);
		expect(getByText("List movie winners by years")).toBeInTheDocument();
	});

	test("Deve chamar a função searchMovie quando o botão é clicado e buscar o filme", async () => {
		const { getByTestId, getByPlaceholderText, getByText } = render(
			<MovieByYear />
		);

		const searchInput = getByPlaceholderText("Search by year");
		const searchButton = getByTestId("search-button");

		fireEvent.change(searchInput, { target: { value: "2020" } });
		fireEvent.click(searchButton);

		await waitFor(() => {
			expect(getByText("Movie 1")).toBeInTheDocument();
		});
	});
});
