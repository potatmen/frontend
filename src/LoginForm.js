import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Swal from "sweetalert2"

function LoginForm(){

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(e){
        e.preventDefault()
        try {
            const requestBody = {username, password}
            const response = await axios.post('http://127.0.0.1:3000/api/user/login', requestBody)
            localStorage.setItem('access_token', response.access_token)
            navigate('/')
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.message || "Login failed."

            });
        }
    }

    return (
        <div className="container" style={{ marginTop: "10vh" }}>
    <form onSubmit={handleLogin}>
        <h2>Login to your account</h2>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
                onChange={e => { setUsername(e.target.value) }}
                type="text"
                className="form-control"
                id="username"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
                onChange={e => { setPassword(e.target.value) }}
                type="password"
                className="form-control"
                id="password"
            />
        </div>
        <button type="submit" className="btn btn-primary">LOG IN</button>
        <p style={{ marginTop: "2vh" }}>
            Don't have an account?<Link to={'/register'}>Create an account</Link>
        </p>
    </form>
</div>
    )
}

export default LoginForm