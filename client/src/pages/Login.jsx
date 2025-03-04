import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FadeTransition from '../components/FadeTransition';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Please fill in both fields.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/api/users/login", {
                username,
                password,
            });

            console.log("Login successful:", response.data);
            setError("");
            localStorage.setItem("token", response.data.token);
            navigate("/");
        } catch (err) {
            console.error(err.response?.data?.message || "Login failed");
            setError(err.response?.data?.message || "Invalid credentials");
        }
    };

    const toRegister = () => {
        navigate("/Register");
    };

    return (
        <FadeTransition>
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="bg-white p-4 p-md-5 rounded shadow-lg mx-3" style={{ maxWidth: '450px', animation: 'fadeIn 0.8s ease' }}>
                    <h2 className="text-center mb-4 fw-bold">Login</h2>
                    {error && <p className="text-danger text-center mb-3">{error}</p>}
                    
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="form-control"
                            />
                        </div>
                        
                        <div className="mb-3">
                            <div className="position-relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <button
                                    type="button"
                                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-decoration-none"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    style={{ padding: '0 12px' }}
                                >
                                    {passwordVisible ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-dark w-100">
                            Login
                        </button>
                    </form>
                    
                    <div className="text-center mt-3">
                        <p className="mb-0">
                            Don't have an account?{" "}
                            <button 
                                onClick={toRegister} 
                                className="btn btn-link text-decoration-none p-0"
                            >
                                Register
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </FadeTransition>
    );
}

export default Login;