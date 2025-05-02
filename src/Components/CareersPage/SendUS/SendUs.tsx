export default function SendUs() {
    return (
        <section className="w-[100%] h-[500px] max-md:h-[400px] flex justify-center items-center bg-[#F6F4F0]">
            <div className="w-[89%] max-md:w-full h-full   flex justify-center items-center bg-[url('/Images/Star-Bg-fixed.avif')] bg-cover bg-center bg-no-repeat bg-fixed relative p-[100px] max-md:p-5 max-md:mb-0 mb-[100px]">
                <div className="absolute w-full h-full inset-0 bg-[#2c32529d]"></div>

                <div className="w-[800px] max-md:w-fit max-md:p-10 absolute flex flex-col gap-7">
                    <h1 className="text-2xl max-md:text-xl text-white font-medium">Didn’t Find the Position You’re Looking For? </h1>
                    <p className="text-5xl suez-regular tracking-wider max-md:text-3xl text-white">Send Us Your CV</p>
                    <button className="px-[45px] py-[14px] w-fit rounded-[15px] hover:bg-white transition-all ease-in duration-300 text-[18px] bg-[#FCFF72]">Apply Now</button>
                </div>
            </div>

        </section>
    )
}