import { Routes, Route } from "react-router-dom";
import ImageList from "../components/ImageList/ImageList";
import ImageDetails from "../components/ImageDetails/ImageDetails";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ImageList/>}/>
            <Route path="/ImageList/:id" element={<ImageDetails/>}/>
        </Routes>
    )
}
export default CustomRoutes; 