import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container" style={{ marginTop: "10vh", textAlign: "center" }}>
            <h1>Welcome to Our App!</h1>
            <p>To get started, please log in or create an account.</p>
            <div>
                <Link to="/login" className="btn btn-primary" style={{ marginRight: "10px" }}>Log In</Link>
                <Link to="/register" className="btn btn-secondary">Register</Link>
            </div>
        </div>
    );
}

export default Home;