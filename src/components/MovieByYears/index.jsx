import { MagnifyingGlass } from "@phosphor-icons/react";
import { InfoTable, TableContainer } from "../../styles/global";
import { ContentSearch } from "./style";
import { getFilmByYear } from "../../service/api";
import { useState } from "react";

export function MovieByYear() {
  const [year, setYear] = useState("");
  const [movie, setMovie] = useState([]);

  async function searchMovie() {
    const result = await getFilmByYear(year);
    setMovie(result.data);
    setYear("");
  }

  return (
    <TableContainer>
      <h2>List movie winners by years</h2>
      <ContentSearch>
        <input
          type="number"
          placeholder="Search by year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <button onClick={searchMovie} data-testid="search-button">
          <MagnifyingGlass size={20} color="#fff" weight="bold" />
        </button>
      </ContentSearch>
      <InfoTable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {movie &&
            movie.map((info) => {
              return (
                <tr key={info.id}>
                  <td>{info.id}</td>
                  <td>{info.year}</td>
                  <td>{info.title}</td>
                </tr>
              );
            })}
        </tbody>
      </InfoTable>
    </TableContainer>
  );
}
