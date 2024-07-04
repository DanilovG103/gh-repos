import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from 'pages/main'
import { RepositoryPage } from 'pages/repository'

const APP_ROUTES = [
  { path: '/', Page: MainPage },
  { path: '/repository/:id', Page: RepositoryPage },
]

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {APP_ROUTES.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
      <Route path="*" element={<></>} />
    </Routes>
  </BrowserRouter>
)
