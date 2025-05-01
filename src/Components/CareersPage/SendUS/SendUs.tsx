export default function SendUs() {
    return (
        <section className="w-[100%] h-[500px] flex justify-center items-center bg-[#F6F4F0]">
            <div className="w-[89%] h-full  bg-[url('/Images/Star-Bg-fixed.avif')] bg-cover bg-center bg-no-repeat bg-fixed relative p-[100px]  mb-[100px]">
                <div className="absolute w-full h-full inset-0 bg-[#2c32529d]"></div>

                <div className="w-[800px] z-89 absolute flex flex-col gap-7">
                    <h1 className="text-2xl text-white font-medium">Didn’t Find the Position You’re Looking For? </h1>
                    <p className="text-5xl suez-regular tracking-wider  text-white">Send Us Your CV</p>
                    <button className="px-[45px] py-[14px] w-fit rounded-[15px] hover:bg-white transition-all ease-in duration-300 text-[18px] bg-[#FCFF72]">Apply Now</button>
                </div>
            </div>

        </section>
    )
}