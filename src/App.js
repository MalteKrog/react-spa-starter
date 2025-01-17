
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";


function App() {
    return (
        <main>
            <Nav />
            <Routes>
            <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;
