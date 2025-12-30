import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";

// path = la URL del navegador
// http://localhost:5173/ -> Raiz (Home)
// http://localhost:5173/login -> Login
// http://localhost:5173/profile -> Profile

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;