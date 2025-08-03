import './Navbar.css'; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <span><img className='phone-icon' src=".\public\phone.png"></img></span>
        <span className="logo-text">Call.io</span>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;