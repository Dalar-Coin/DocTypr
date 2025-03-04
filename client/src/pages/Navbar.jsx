import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ 
            padding: "1rem", 
            backgroundColor: "#f8f9fa",
            marginBottom: "1rem", 
            width: "100%"
        }}>
            <ul style={{ 
                display: "flex", 
                listStyle: "none", 
                margin: 0,
                padding: 0,
                justifyContent: "space-between" // This will push items apart
            }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;