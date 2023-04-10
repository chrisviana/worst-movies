import React from "react";
import { render } from "@testing-library/react";
import { Table } from "../AwardsRange/components/Table";
import "@testing-library/jest-dom";

test("renders table with given subtitle and infos", () => {
	const subtitle = "My Table";
	const infos = [
		{
			producer: "John Doe",
			interval: "2020-2021",
			previousWin: "2019",
			followingWin: "2022",
		},
		{
			producer: "Jane Doe",
			interval: "2018-2019",
			previousWin: "2017",
			followingWin: "2020",
		},
	];

	const { getByText } = render(<Table subtitle={subtitle} infos={infos} />);

	expect(getByText(subtitle)).toBeInTheDocument();
	expect(getByText("John Doe")).toBeInTheDocument();
	expect(getByText("2020-2021")).toBeInTheDocument();
	expect(getByText("2019")).toBeInTheDocument();
	expect(getByText("2022")).toBeInTheDocument();
	expect(getByText("Jane Doe")).toBeInTheDocument();
	expect(getByText("2018-2019")).toBeInTheDocument();
	expect(getByText("2017")).toBeInTheDocument();
	expect(getByText("2020")).toBeInTheDocument();
});
