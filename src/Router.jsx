import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { List } from './pages/List'
import { DefaultLayout } from './layouts/DefaultLayout'
export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/list' element={<List />}/>
      </Route>

    </Routes>
  )
}