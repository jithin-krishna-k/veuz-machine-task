const GitexCard = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[481px] w-full lg:w-[351px] mr-2 sm:mr-4 mt-2 sm:mt-4 rounded-lg overflow-hidden">
            <img
                src="/images/imageNav.png"
                alt=""
                className="object-left-top object-cover w-full h-[60px] sm:h-[80px] lg:h-[101px]"
            />
            <img
                src="/Gitex.svg"
                alt=""
                className="absolute top-3 sm:top-4 lg:top-6 left-2 sm:left-3 lg:left-4 h-[30px] sm:h-[40px] lg:h-[50px]"
            />
            <div className="absolute top-[60px] sm:top-[80px] lg:top-[101px] left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white w-[200px] sm:w-[230px] lg:w-[260px] h-[30px] sm:h-[35px] lg:h-[40px] bg-[linear-gradient(90deg,#299D3F_0%,#123F22_100%)] rounded-bl-lg rounded-br-lg px-2 sm:px-4 lg:px-[30px]">
                <h1 className="font-alexandria font-light text-xs sm:text-sm">Registration Information 1</h1>
            </div>
            <div className="pt-[40px] sm:pt-[50px] lg:pt-[65px] bg-white font-alexandria text-[#D4D4D4] flex-col text-center items-center justify-between">
                <h1 className="font-bold text-lg sm:text-xl">FUll NAME</h1>
                <h1 className="font-normal text-base sm:text-lg mt-3 sm:mt-5">Job TITLE</h1>
                <h1 className="font-normal text-base sm:text-lg mt-3 sm:mt-4">COMPANY NAME</h1>
                <h1 className="font-normal text-base sm:text-lg mt-3 sm:mt-4">COUNTRY OF RESIDENCE</h1>

                <div className="w-full max-w-[386px] shadow-[0px_4.81px_33.7px_0px_rgba(0,0,0,0.12)] h-[80px] sm:h-[100px] lg:h-[110px] mt-4 sm:mt-6 text-center font-alexandria rounded-br-md rounded-bl-md mx-auto">
                    <div className="p-4 sm:p-6 lg:p-7">
                        <h1 className="text-base sm:text-lg font-normal text-[#010216]">BADGE CATEGORY</h1>
                        <h1 className="mt-1 sm:mt-2 text-lg sm:text-xl font-bold text-[#010216]">VISITOR</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GitexCard