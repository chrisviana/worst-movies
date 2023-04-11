import { NavLink } from "react-router-dom";
import { Container, Content } from "./style";

export function Sidebar() {
  return (
    <Container>
      <Content>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/list">List</NavLink>
      </Content>
    </Container>
  );
}
