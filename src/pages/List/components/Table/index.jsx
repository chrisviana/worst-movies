import { InfoTable, Search, TableContainer } from "./style";
import { Pagination } from "../Pagination";

export function Table({
	data,
	handleSarchByYear,
	handleSarchWinner,
	currentPage,
	setCurrentPage,
}) {
	const itemsPerPage = 15;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageClick = (page) => {
		setCurrentPage(page);
	};

	return (
		<TableContainer>
			<h2>List Movies</h2>
			<InfoTable>
				<thead>
					<tr>
						<th>ID</th>
						<th>
							<Search>
								<span>Year</span>
								<input
									type="number"
									placeholder="Filter by year"
									onChange={handleSarchByYear}
								/>
							</Search>
						</th>
						<th>Title</th>
						<th>
							<Search>
								<span>Winner</span>
								<select onChange={handleSarchWinner}>
									<option value="">Yes/No</option>
									<option value="Yes">Yes</option>
									<option value="No">No</option>
								</select>
							</Search>
						</th>
					</tr>
				</thead>
				<tbody>
					{currentData.map((item, index) => (
						<tr
							key={item.id}
							style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#e2e2e2" }}
						>
							<td>{item.id}</td>
							<td>{item.year}</td>
							<td>{item.title}</td>
							<td>{item.winner ? "Yes" : "No"}</td>
						</tr>
					))}
				</tbody>
			</InfoTable>
			<Pagination
				totalItems={data.length}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				onPageClick={handlePageClick}
			/>
		</TableContainer>
	);
}
