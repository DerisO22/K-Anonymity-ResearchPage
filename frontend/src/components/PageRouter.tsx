import { Routes, Route } from "react-router-dom"
import HomeInfo from "../pages/Home"
import ResearchInfo from '../pages/ResearchInfo';
import Results from "../pages/Results";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeInfo />} />
            <Route path="/info" element={<ResearchInfo />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    )
}

export default PageRouter;