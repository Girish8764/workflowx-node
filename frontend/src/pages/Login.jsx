import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        try {

            const res = await api.post("/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);

            navigate("/dashboard");

        } catch (err) {

            alert("Invalid Credentials");

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex justify-center items-center">

            <div className="bg-slate-900 p-10 rounded-2xl w-[430px] shadow-2xl">

                <h1 className="text-4xl font-bold text-blue-500">

                    🚀 WorkFlowX

                </h1>

                <p className="text-slate-400 mt-2 mb-8">

                    Employee Management System

                </p>

                <input
                    className="w-full p-3 rounded-lg mb-4 bg-slate-800 text-white outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-full p-3 rounded-lg mb-6 bg-slate-800 text-white outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={login}
                    className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
                >

                    Login

                </button>

            </div>

        </div>

    );

}

export default Login;
