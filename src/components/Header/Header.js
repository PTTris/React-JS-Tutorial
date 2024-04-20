import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";

function Header() {
    const account = useSelector((state) => state.user.account);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };
    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink className="navbar-brand" to="/">
                    <img className="logoFire" src={Logo} alt="" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/users">
                            User
                        </NavLink>
                        <NavLink className="nav-link" to="/admins">
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        {isAuthenticated === false ? (
                            <>
                                <button
                                    className="btnLogIn"
                                    onClick={handleLogin}
                                >
                                    Log in
                                </button>
                                <button
                                    className="btnSignUp"
                                    onClick={handleRegister}
                                >
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            <>
                                <NavDropdown
                                    title={account.username}
                                    id="collapsible-nav-dropdown"
                                >
                                    <NavDropdown.Item href="/login">
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/logout">
                                        Log out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
