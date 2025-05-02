export default function Header() {
    return (
        <header className="w-full relative flex justify-center items-center h-[729px] max-md:w-full max-sm:h-[600px] ">
            <img
                className="absolute w-full h-full inset-0 object-cover max-md:w-full"
                src="/images/Header_image.avif"
                alt="Header background"
            />
            <div className="absolute top-55 left-20 max-sm:relative max-sm:top-0 max-md:left-0  max- max-sm:flex max-sm:justify-center max-sm:items-center flex flex-col gap-5">
                <h1 className="text-[75px] suez-regular text-[#272443] max-sm:text-2xl ">Made to Be Played</h1>
                <p className="text-3xl font-sans max-md:text-2xl max-sm:text-center max-sm:text-[25px] max-sm:w-[270px] text-[#272443]">The Very Best in Mobile Gaming</p>
                <div className="flex gap-5 mt-5 max-sm:justify-center items-center">
                    <button className="px-[55px]  py-[15px] max-sm:py-[10px] rounded-[10px] bg-[#DA392B] hover:bg-white hover:text-black transition-all ease-in duration-300 text-[18px]
                     max-sm:px-[24px] max-sm:text-[15px] text-white">Get
                        Now</button>
                    <img src="/images/Google.avif" alt="" className="max-sm:w-[100px] w-[170px] max-sm:h-[43px] h-[57px]" />
                </div>
            </div>
        </header>
    );
}
