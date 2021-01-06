import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// Страницы (роуты)*
import Routes from './pages/routes'
// Меню *
import Topbar from './pages/components/topbar'
// Контекст пользователя *
import { CurrentUserProvider } from './contexts/currentUser'

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <Topbar />
        <Routes />
      </Router>
    </CurrentUserProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// Установленные либы *
// Axios