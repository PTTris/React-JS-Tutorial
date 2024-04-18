import { useState } from "react";
import "./Login.scss";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {};
    return (
        // <section class="py-3 py-md-5 py-xl-8">
        //     <div class="container">
        //         <div class="row">
        //             <div class="col-12">
        //                 <div class="mb-5">
        //                     <h2 class="display-5 fw-bold text-center">
        //                         Sign in
        //                     </h2>
        //                     <p class="text-center m-0">
        //                         Don't have an account? <a href="#!">Sign up</a>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="row justify-content-center">
        //             <div class="col-12 col-lg-10 col-xl-8">
        //                 <div class="row gy-5 justify-content-center">
        //                     <div class="col-12 col-lg-5">
        //                         <form action="#!">
        //                             <div class="row gy-3 overflow-hidden">
        //                                 <div class="col-12">
        //                                     <div class="form-floating mb-3">
        //                                         <input
        //                                             type="email"
        //                                             class="form-control border-0 border-bottom rounded-0"
        //                                             name="email"
        //                                             id="email"
        //                                             placeholder="name@example.com"
        //                                             required
        //                                         />
        //                                         <label
        //                                             for="email"
        //                                             class="form-label"
        //                                         >
        //                                             Email
        //                                         </label>
        //                                     </div>
        //                                 </div>
        //                                 <div class="col-12">
        //                                     <div class="form-floating mb-3">
        //                                         <input
        //                                             type="password"
        //                                             class="form-control border-0 border-bottom rounded-0"
        //                                             name="password"
        //                                             id="password"
        //                                             value=""
        //                                             placeholder="Password"
        //                                             required
        //                                         />
        //                                         <label
        //                                             for="password"
        //                                             class="form-label"
        //                                         >
        //                                             Password
        //                                         </label>
        //                                     </div>
        //                                 </div>
        //                                 <div class="col-12">
        //                                     <div class="row justify-content-between">
        //                                         <div class="col-6">
        //                                             <div class="form-check">
        //                                                 <input
        //                                                     class="form-check-input"
        //                                                     type="checkbox"
        //                                                     value=""
        //                                                     name="remember_me"
        //                                                     id="remember_me"
        //                                                 />
        //                                                 <label
        //                                                     class="form-check-label text-secondary"
        //                                                     for="remember_me"
        //                                                 >
        //                                                     Remember me
        //                                                 </label>
        //                                             </div>
        //                                         </div>
        //                                         <div class="col-6">
        //                                             <div class="text-end">
        //                                                 <a
        //                                                     href="#!"
        //                                                     class="link-secondary text-decoration-none"
        //                                                 >
        //                                                     Forgot password?
        //                                                 </a>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 <div class="col-12">
        //                                     <div class="d-grid">
        //                                         <button
        //                                             class="btn btn-primary btn-lg"
        //                                             type="submit"
        //                                         >
        //                                             Log in
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </form>
        //                     </div>
        //                     <div class="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column">
        //                         <div
        //                             class="bg-dark h-100 d-none d-lg-block"
        //                             style={{ width: "1px", opacity: 0.1 }}
        //                         ></div>
        //                         <div
        //                             class="bg-dark w-100 d-lg-none"
        //                             style={{ height: "1px", opacity: 0.1 }}
        //                         ></div>
        //                         <div>or</div>
        //                         <div
        //                             class="bg-dark h-100 d-none d-lg-block"
        //                             style={{ width: "1px", opacity: 0.1 }}
        //                         ></div>
        //                         <div
        //                             class="bg-dark w-100 d-lg-none"
        //                             style={{ height: "1px", opacity: 0.1 }}
        //                         ></div>
        //                     </div>
        //                     <div class="col-12 col-lg-5 d-flex align-items-center">
        //                         <div class="d-flex gap-3 flex-column w-100 ">
        //                             <a href="#!" class="btn btn-lg btn-danger">
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     width="16"
        //                                     height="16"
        //                                     fill="currentColor"
        //                                     class="bi bi-google"
        //                                     viewBox="0 0 16 16"
        //                                 >
        //                                     <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        //                                 </svg>
        //                                 <span class="ms-2 fs-6">
        //                                     Sign in with Google
        //                                 </span>
        //                             </a>
        //                             <a href="#!" class="btn btn-lg btn-primary">
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     width="16"
        //                                     height="16"
        //                                     fill="currentColor"
        //                                     class="bi bi-facebook"
        //                                     viewBox="0 0 16 16"
        //                                 >
        //                                     <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        //                                 </svg>
        //                                 <span class="ms-2 fs-6">
        //                                     Sign in with Facebook
        //                                 </span>
        //                             </a>
        //                             <a href="#!" class="btn btn-lg btn-dark">
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     width="16"
        //                                     height="16"
        //                                     fill="currentColor"
        //                                     class="bi bi-apple"
        //                                     viewBox="0 0 16 16"
        //                                 >
        //                                     <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
        //                                     <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
        //                                 </svg>
        //                                 <span class="ms-2 fs-6">
        //                                     Sign in with Apple
        //                                 </span>
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
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
                                    Sign in with
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
                                <p class="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input
                                    type="email"
                                    id="form3Example3"
                                    class="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    value={email}
                                    onChange={handleLogin}
                                />
                                <label class="form-label" for="form3Example3">
                                    Email address
                                </label>
                            </div>

                            <div data-mdb-input-init class="form-outline mb-3">
                                <input
                                    type="password"
                                    id="form3Example4"
                                    class="form-control form-control-lg"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={handleLogin}
                                />
                                <label class="form-label" for="form3Example4">
                                    Password
                                </label>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="form-check mb-0">
                                    <input
                                        class="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="form2Example3"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" class="text-body">
                                    Forgot password?
                                </a>
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
                                >
                                    Login
                                </button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?{" "}
                                    <a href="#!" class="link-danger">
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
