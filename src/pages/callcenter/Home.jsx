import Aside from "../../components/AsideCallCenter"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/HeaderCallCenter";


const Home = () => {
    const location = useLocation();
    const [animate, setAnimate] = useState(false);

    
    useEffect(() => {
        if (location.state?.fromLogin) {
        setAnimate(true);

        window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    return (
        <div className={animate ? "animate-page" : "bg-[#F4F4F4] relative h-screen"}>
            <div className="relative flex h-full flex-col z-20">
                <Aside />
            </div>

            <Header />

            <main className="">
                
            </main>






        </div>

    )
}

export default Home;