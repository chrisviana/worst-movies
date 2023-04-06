import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Container, Content } from './style'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Outlet />
      </Content>
    </Container>
  )
}