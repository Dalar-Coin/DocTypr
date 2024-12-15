import { useNavigate } from "react-router-dom";

function Home () {
    
    const navigate = useNavigate()

    function toLogin() {
        navigate('/Login')
    }
    
    return (
        <div>
            Home Page
            <div>
                <button onClick={toLogin}>
                    Login
                </button>
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}

export default Home;