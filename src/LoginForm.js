import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function LoginForm() {
    const navigate = useNavigate(); // Hook for programmatic navigation

    // State variables for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle the login process
    async function handleLogin(e) {
        e.preventDefault(); // Prevent the default form submission
        try {
            // Prepare the request body
            const requestBody = { username, password };
            // Send POST request to the login endpoint
            const response = await axios.post('http://127.0.0.1:3000/api/user/login', requestBody);
            // Store access and refresh tokens in local storage
            localStorage.setItem('access_token', response.data.message.accessToken);
            localStorage.setItem('refresh_token', response.data.message.refreshToken);
            // Navigate to the main app page
            navigate('/app');
        } catch (error) {
            // Show an error alert if login fails
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.status || "Login failed."
            });
        }
    }

    return (
        <div className="container" style={{ marginTop: "10vh" }}>
            <form onSubmit={handleLogin}> {/* Form submission handled by handleLogin */}
                <h2>Login to your account</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        onChange={e => { setUsername(e.target.value); }} // Update username state
                        type="text"
                        className="form-control"
                        id="username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        onChange={e => { setPassword(e.target.value); }} // Update password state
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
    );
}

export default LoginForm; // Export the LoginForm component