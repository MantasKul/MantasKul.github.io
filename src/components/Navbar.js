import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="navbar-nav">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link class="nav-link" to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}