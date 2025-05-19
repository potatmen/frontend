import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterForm() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e) {
        e.preventDefault();
        try {
            const requestBody = { username, password };
            await axios.post('http://127.0.0.1:3000/api/user/register', requestBody);
            Swal.fire({
                icon: "success",
                title: "Registration Successful!",
                text: "You can now log in."
            });
            navigate('/login');
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.status || "Registration failed."
            });
        }
    }

    return (
        <div className="container" style={{ marginTop: "10vh" }}>
            <form onSubmit={handleRegister}>
                <h2>Create an account</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        onChange={e => setUsername(e.target.value)}
                        type="text"
                        className="form-control"
                        id="username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">REGISTER</button>
                <p style={{ marginTop: "2vh" }}>
                    Already have an account?<Link to={'/login'}>Log in</Link>
                </p>
            </form>
        </div>
    );
}

export default RegisterForm;