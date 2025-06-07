import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col max-w-6xl gap-y-18 mx-auto">
            <Outlet />
        </div>
    );
};

export default MainLayout;
