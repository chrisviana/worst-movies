import { AwardsRange } from "../../components/AwardsRange";
import { ListYearsWithMulpleWinners } from "../../components/ListYearsWithMulpleWinners";
import { MovieByYear } from "../../components/MovieByYears";
import { TopThreeStudios } from "../../components/TopThreeStudios";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <ListYearsWithMulpleWinners />
      <TopThreeStudios />
      <AwardsRange />
      <MovieByYear />
    </Container>
  );
}
