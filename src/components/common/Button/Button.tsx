const Button = () => {
    return (
        <div className="relative cursor-pointer">
            <div className=" w-[158px] h-[60px] rounded-md border border-solid border-navy text-navy text-xl flex justify-center items-center">
                Resume
            </div>
            <div className="z-[-1] absolute top-1 left-1 w-[158px] h-[60px] rounded-md bg-orange" />
        </div>
    );
};

export default Button;
