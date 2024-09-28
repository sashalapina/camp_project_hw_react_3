import { useNavigate } from "react-router-dom"

import './Login.css'

function Login() {

    const navigate = useNavigate()

    const goToMain = () => {
        navigate('/')
    }

    return (
        <>
        <h1>Login Page</h1>
        <button onClick={goToMain} className="sign-in-btn">Sign In</button>
        </>
        
    )
    
}

export default Login