export default function OurOffice() {
    return (
        <section className="w-full relative h-[700px] flex justify-center items-center bg-[url('/Images/OurOffice_bg.avif')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="w-full h-full absolute inset-0 bg-[#eb2f22b6]" ></div>
            <div className="w-[45%] z-89 flex justify-center items-center h-full" >
                <ul className="w-[60%] text-white flex flex-col  gap-5">
                    <li className="text-2xl font-medium">Our Offices</li>
                    <li className="text-5xl suez-regular w-[80%]">Our Studio in San Francisco</li>
                    <li className="text-xl">I'm a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Im a great place for you to tell a story and let your users know a little more about you.</li>
                </ul>
            </div>
            <div className="w-[45%] z-89 h-full flex justify-center items-center " >
                <div className="w-[400px] relative  h-[380px] flex px-[40px] justify-end pb-[50px] flex-col rounded-4xl bg-white gap-5 ">
                    <img className="absolute -top-20" src="/images/CatPink.png" alt="" />
                    <h2 className="text-2xl font-medium text-[#272443] ">We`d Love to Work With You</h2>
                    <p className="text-[17px]">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <button className="px-[55px] py-5 text-xl w-fit bg-[#272443] text-white">Explore Opportunities</button>

                </div>
            </div>

        </section>
    )
}