import { Routes, Route } from "react-router-dom";
import HomeInfo from "../pages/Home";
import Results from "../pages/Results";
import Research from "../pages/Research";
import ResearchProfile from "../pages/ResearchProfile";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeInfo />} />
            <Route path="/info" element={<Research />} />
            <Route path="/results" element={<Results />} />
            <Route path="/researcher-bio/:name" element={<ResearchProfile />} />
        </Routes>
    )
}

export default PageRouter;