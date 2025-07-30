import reactLogo from './assets/react.svg'
import './header.css'
function header()
{
    return (
      
      <header>
        <img src={reactLogo} width = '40px' alt="React logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>About</li>
          <li>Prcing</li>
        </ul>
      </nav>
       </header>
      
    )
}

export default header;