import { useState } from "react";
import Aside from "./AsideCallCenter"; 
import Header from "./HeaderCallCenter"; 

const CallCenterLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="bg-[#f4f4f4] relative min-h-screen min-w-[1280px]">
            <div className="relative flex flex-col z-20">
                <Aside isOpen={isSidebarOpen} />
            </div>

            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

            <main className={`flex mt-28 fade-main mr-10 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-[300px]' : 'ml-8'}`}>
                
                <div className="w-full">
                    {children}
                </div>
                
            </main>
        </div>
    );
};

export default CallCenterLayout;