// eslint-disable-next-line react/prop-types
const NavBar = ({ children, currentstep }) => {

    return (
        <div className="relative w-full">
            <img src="/images/imageNav.png" alt="Top" className="w-full h-[160px]" />
            {(currentstep === 1 || currentstep === 2) && (
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-10">
                    <img src="/images/Login.png" alt="Login" className="w-auto max-w-full h-auto" />
                </div>
            )}
            <div className="relative z-20">
                {children}
            </div>
            <img src="/images/imageNav.png" alt="Bottom" className="w-full h-[160px]" />
        </div>
    );
};

export default NavBar;
