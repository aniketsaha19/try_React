import Navbar from "../organisms/Navbar"
import './Home.css';
import Footer from "../organisms/Footer";
function Home() {
    return ( 
        <>
            <Navbar />
            <div className="home-main">

            </div>
            <footer style={{
        textAlign: 'center',
        padding: '12px 20px',
        backgroundColor: '#f1f1f1',
        color: '#555',
        borderTop: '1px solid #ddd',
      }}>
        © 2025 Your Company. All rights reserved.
      </footer>
      </>
    );
}

export default Home;