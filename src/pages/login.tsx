import { useState } from "react";
import "./pages.scss";
import { Logo } from "../svgs";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const submitFunc = (e: any) => {
        e.preventDefault();

        console.log({ email: userName, password: password });

        fetch("https://adminstaging.airgate.ng/index.php/api/auth/login", {
            method: "POST",
            headers: { "content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify({ email: userName, password: password }),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                navigate("/dashboard");
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <div className="LoginPage">
            <Logo />
            <div className="card">
                <h3>Welcome Back!</h3>
                <p className="desc">Log into your account</p>
                <form action="" onSubmit={submitFunc}>
                    <label htmlFor="">
                        Username
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="">
                        Password
                        <input
                            type="password"
                            name=""
                            id=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <div className="bottom-actions">
                        <p>
                            <input type="checkbox" name="" id="" />
                            Remember Me
                        </p>
                        <p>Forgot Password?</p>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
