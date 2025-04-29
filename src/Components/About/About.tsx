export default function About() {
    return(
        <section className="w-full h-[800px] flex justify-center items-center gap-[80px] bg-[#F6F4F0]">
            <div className=" flex justify-center gap-7 items-center flex-col w-[45%] text-[#272443]">
                <h2 className="text-2xl font-medium border-b-4 rounded-xl pb-3 border-[#272443] ">About Tripo</h2>
                <p className="text-[45px] w-full text-center suez-regular tracking-wider">Your Source for Mobile Entertainment</p>
                <p className="text-[20px] w-[90%] font-medium  text-center">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <button className="px-[55px] py-[12px] rounded-2xl hover:bg-white hover:border hover:text-black text-2xl bg-[#DA392B] text-white transition-all ease-in duration-300">Learn More</button>
            </div>
            <div className="w-[40%] h-[420px] rounded-2xl  relative ">
                <div className="relative rounded-2xl w-full h-full overflow-hidden">
                <img className="absolute inset-0 rou w-full h-full hover:scale-105 transition-all ease-in duration-300  object-cover object-center" src="/images/About-Image.avif" alt="" />
                </div>
                <img className="absolute -bottom-20 -left-20 w-[250px]" src="/images/Doll.avif" alt="" />
            </div>
        </section>
    )
}