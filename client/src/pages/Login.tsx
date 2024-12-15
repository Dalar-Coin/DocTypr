import { useNavigate} from "react-router-dom";

function Login () {

    const navigate = useNavigate()

    function toRegister () {
        navigate('/Register')
    }

    return (
        <div>
            <input>Enter your Username</input>
            <input>Enter your Password</input>
            <div>
                <button onClick={toRegister}>
                    Register
                </button>
            </div>
        </div>
    )
}

export default Login;