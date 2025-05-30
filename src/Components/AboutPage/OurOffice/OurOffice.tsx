import Image from "next/image";

export default function OurOffice() {
    return (
        <section className="w-full relative h-[700px] max-md:py-10 max-md:gap-15 max-md:h-full max-md:flex-col  flex justify-center items-center bg-[url('/Images/OurOffice_bg.avif')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="w-full h-full absolute inset-0 bg-[#eb2f22b6]" ></div>
            <div className="w-[45%] max-md:w-[90%] z-79 flex justify-center items-center h-full " >
                <ul className="w-[60%] max-md:w-full text-white flex flex-col  gap-5">
                    <li className="text-2xl font-medium">Our Offices</li>
                    <li className="text-5xl suez-regular w-[80%]">Our Studio in San Francisco</li>
                    <li className="text-xl">I'm a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Im a great place for you to tell a story and let your users know a little more about you.</li>
                </ul>
            </div>
            <div className="w-[45%] max-md:w-full  h-full flex justify-center items-center " >
                <div className="w-[400px] max-md:w-[340px] relative h-[380px] max-md:h-[500px] flex px-[40px] justify-end pb-[50px] flex-col rounded-4xl max-md:p-5 bg-white gap-5 ">
                    <Image className="" src="/images/CatPink.png" alt=""  width={100} height={100}/>
                    <h2 className="text-2xl font-medium text-[#272443] ">We`d Love to Work With You</h2>
                    <p className="text-[17px]">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <button className="px-[55px] max-md:text-[15px] py-5 text-xl w-fit bg-[#272443] text-white">Explore Opportunities</button>

                </div>

            </div>
      
        </section>
    )
} 