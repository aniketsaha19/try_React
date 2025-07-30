import { Fragment } from 'react'
import Header from './header.jsx';
import './App.css'

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <h1>Vite + React</h1>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>ESLint</li>
            <li>Prettier</li>
          </ul>
       </main>
      <footer>
        <small>Aniket Saha Dev 2025</small>
      </footer>
    </Fragment>
  )
}

export default App
