import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterForm() {
    const navigate = useNavigate(); // Hook for programmatic navigation

    // State variables for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle the registration process
    async function handleRegister(e) {
        e.preventDefault(); // Prevent the default form submission
        try {
            // Prepare the request body
            const requestBody = { username, password };
            // Send POST request to the registration endpoint
            await axios.post('http://127.0.0.1:3000/api/user/register', requestBody);
            // Show success alert upon successful registration
            Swal.fire({
                icon: "success",
                title: "Registration Successful!",
                text: "You can now log in."
            });
            // Navigate to the login page
            navigate('/login');
        } catch (error) {
            // Show an error alert if registration fails
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.status || "Registration failed."
            });
        }
    }

    return (
        <div className="container" style={{ marginTop: "10vh" }}>
            <form onSubmit={handleRegister}> {/* Form submission handled by handleRegister */}
                <h2>Create an account</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        onChange={e => setUsername(e.target.value)} // Update username state
                        type="text"
                        className="form-control"
                        id="username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        onChange={e => setPassword(e.target.value)} // Update password state
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

export default RegisterForm; // Export the RegisterForm component