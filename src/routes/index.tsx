import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/main/MainLayout";
import Home from "../pages/home/Home";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Main Layout - hanya 1 halaman */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            {/* Admin Layout 
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="projects" element={<ManageProjects />} />
            </Route>
            */}
        </Routes>
    );
};

export default AppRoutes;
