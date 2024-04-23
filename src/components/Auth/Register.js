import "./Register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../Services/apiService";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isChangeClassPassword, setChangeClass] = useState(true);

    const navigate = useNavigate();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async () => {
        if (!validateEmail(email)) {
            toast.error("Invalid email!");
            return;
        }
        if (!password) {
            toast.error("Invalid password!");
            return;
        }
        if (password.length < 4) {
            toast.error("Please enter 4 characters");
            return;
        }
        if (!username) {
            toast.error("Invalid username!");
            return;
        }
        let data = await postRegister(email, username, password);
        console.log(data);
        if (data.EC === 0) {
            navigate("/login");
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    const handleShowHidePassword = (event) => {
        const inputPassword = document.getElementById("password");

        if (inputPassword.type === "password" && isChangeClassPassword) {
            inputPassword.type = "text";
            setChangeClass(!isChangeClassPassword);
        } else {
            inputPassword.type = "password";
            setChangeClass(!isChangeClassPassword);
        }
    };

    return (
        <>
            <section class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="img-fluid"
                                alt="Sample"
                            />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p class="lead fw-normal mb-0 me-3">
                                        Sign up with
                                    </p>
                                    <button
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        class="btn btn-primary btn-floating mx-1"
                                    >
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        class="btn btn-primary btn-floating mx-1"
                                    >
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        class="btn btn-primary btn-floating mx-1"
                                    >
                                        <i class="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0">
                                        Or
                                    </p>
                                </div>
                                <div className="input-group has-validation">
                                    <div
                                        data-mdb-input-init
                                        class="form-outline mb-4 "
                                    >
                                        <label
                                            class="form-label"
                                            for="form3Example3"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            style={{ border: "1px solid #ccc" }}
                                            type="email"
                                            id="form3Example6"
                                            class="form-control form-control-lg"
                                            placeholder="Enter a valid email address"
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                </div>

                                <div
                                    data-mdb-input-init
                                    class="form-outline mb-4"
                                >
                                    <label
                                        class="form-label"
                                        for="form3Example3"
                                    >
                                        Username
                                    </label>
                                    <input
                                        style={{ border: "1px solid #ccc" }}
                                        id="form3Example7"
                                        class="form-control form-control-lg"
                                        placeholder="Enter username"
                                        onChange={(event) =>
                                            setUsername(event.target.value)
                                        }
                                    />
                                </div>

                                <div
                                    data-mdb-input-init
                                    class="form-outline mb-3"
                                >
                                    <label class="form-label" for="password">
                                        Password
                                    </label>
                                    <input
                                        style={{ border: "1px solid #ccc" }}
                                        type="password"
                                        id="password"
                                        class="form-control form-control-lg passwordInput"
                                        placeholder="Enter password"
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                            const isShowHidePassword =
                                                document.querySelector(
                                                    ".eyeOpen"
                                                );
                                            if (event.target.value) {
                                                isShowHidePassword.classList.remove(
                                                    "d-none"
                                                );
                                            } else
                                                isShowHidePassword.classList.add(
                                                    "d-none"
                                                );
                                        }}
                                        required
                                    />
                                    <span
                                        className="eyeOpen d-none"
                                        onClick={(event) =>
                                            handleShowHidePassword(event)
                                        }
                                    >
                                        {isChangeClassPassword ? (
                                            <FaEye />
                                        ) : (
                                            <FaEyeSlash />
                                        )}
                                    </span>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        class="btn btn-primary btn-lg"
                                        style={{
                                            paddingLeft: "2.5rem",
                                            paddingRight: "2.5rem",
                                        }}
                                        onClick={() => handleRegister()}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div
                                className="backtohome mt-4 d-inline-block p-2"
                                style={{
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                }}
                            >
                                <span onClick={() => navigate("/")}>
                                    &#60;&#60; Go to HomePage
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
