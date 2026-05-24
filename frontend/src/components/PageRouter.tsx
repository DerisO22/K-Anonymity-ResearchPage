import { Routes, Route } from "react-router-dom";
import HomeInfo from "../pages/Home";
import Results from "../pages/Results";
import Research from "../pages/Research";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeInfo />} />
            <Route path="/info" element={<Research />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    )
}

export default PageRouter;