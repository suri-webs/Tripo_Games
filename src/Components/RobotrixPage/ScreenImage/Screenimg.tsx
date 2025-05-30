import Image from "next/image";

export default function ScreenShots() {
    return(
        <section className="w-full h-[600px] max-lg:h-full max-lg:py-[100px] max-sm:py-[40px] max-lg:gap-10 p-[20px] flex flex-col justify-center items-center  bg-[#F6F4F0]">
            <h2 className="text-4xl text-[#272443] suez-regular max-lg:border-b-6 max-md:text-2xl max-sm:w-[90%] max-sm:pb-[10px] max-lg:w-[50%] max-lg:rounded-b-3xl max-lg:text-center  w-[89%]">Screenshots</h2>
            <div className="w-[90%] h-[80%] flex gap-10 justify-center items-center max-lg:flex-wrap">
                <div className="!w-[50%] max-lg:!w-[90%] max-sm:!w-[95%] max-sm:!h-[100%] !h-[75%] overflow-hidden rounded-3xl"><Image src="/images/Robot-Game.avif" alt="" className="w-full h-full object-cover object-center hover:scale-107 transition-all ease-in duration-500" width={1000} height={100}/></div>
                <div className="!w-[50%] max-lg:!w-[90%] max-sm:!w-[95%] max-sm:!h-[100%] !h-[75%] overflow-hidden rounded-3xl"><Image src="/images/RobotHend.avif" alt="" className="w-full h-full object-cover object-center hover:scale-107 transition-all ease-in duration-500" width={1000} height={100}/></div>
            </div>
        </section>
    )
}