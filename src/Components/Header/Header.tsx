export default function Header() {
    return (
        <header className="w-full relative  h-[829px] ">
            <img
                className="absolute w-full h-full inset-0 object-cover"
                src="/images/Header_image.avif"
                alt="Header background"
            />
            <div className="absolute top-55 left-20 flex flex-col gap-5">
                <h1 className="text-[75px] suez-regular text-[#272443] ">Made to Be Played</h1>
                <p className="text-3xl font-sans text-[#272443]">The Very Best in Mobile Gaming</p>
                <div className="flex gap-5 mt-5">
                    <button className="px-[55px]  py-[5px] rounded-[10px] bg-[#DA392B] text-[18px] text-white">Get
                        Now</button>
                    <img src="/images/Google.avif" alt="" />
                </div>
            </div>
        </header>
    );
}
