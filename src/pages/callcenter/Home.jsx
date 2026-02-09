import Aside from "../../components/AsideCallCenter"


const Home = () => {
    return (
        <div className="bg-[#F4F4F4] relative h-screen">

            <div className="absolute top-0 left-0 w-full h-32 bg-[#24ADE8] z-0">
                <header>
                    <div>
                        
                    </div>
                </header>
            </div>

            <div className="relative flex h-full z-10">
                <Aside />
            </div>




        </div>

    )
}

export default Home;