const GitexCard = () => {
    return (
        <div className="relative h-[481px] w-[451px] mr-4 mt-4 rounded-lg overflow-hidden">
            <img
                src="/images/imageNav.png"
                alt=""
                className="object-left-top object-cover w-full h-[101px]"
            />
            <img
                src="/Gitex.svg"
                alt=""
                className="absolute top-6 left-4 h-[50px]"
            />
            <div className="absolute top-[101px] left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white w-[260px] h-[40px] bg-[linear-gradient(90deg,#299D3F_0%,#123F22_100%)] rounded-bl-lg rounded-br-lg px-[30px]">
                <h1 className="font-alexandria font-light text-sm">Registration Information 1</h1>
            </div>
            <div className="pt-[65px] bg-white font-alexandria text-[#D4D4D4] flex-col text-center items-center justify-between">
                <h1 className="font-bold text-xl">FUll NAME</h1>
                <h1 className="font-normal text-lg mt-5">Job TITLE</h1>
                <h1 className="font-normal text-lg mt-4">COMPANY NAME</h1>
                <h1 className="font-normal text-lg mt-4">COUNTRY OF RESIDENCE</h1>

                <div className="w-[386px] shadow-[0px_4.81px_33.7px_0px_rgba(0,0,0,0.12)] h-[110px] mt-6 text-center font-alexandria rounded-br-md rounded-bl-md">
                    <div className="p-7">
                        <h1 className="text-lg font-normal text-[#010216]">BADGE CATEGORY</h1>
                        <h1 className="mt-2 text-xl font-bold text-[#010216]">VISITOR</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GitexCard