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

            <Header />

            <div className="relative flex h-full z-10">
                <Aside />
            </div>




        </div>

    )
}

export default Home;