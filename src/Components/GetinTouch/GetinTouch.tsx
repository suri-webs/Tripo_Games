export default function GetinTouch() {
    return (
        <section className="w-full h-[600px] bg-[url('/Images/Star-Bg-fixed.avif')] bg-cover bg-center bg-no-repeat bg-fixed relative ">
            <div className="absolute w-full h-full inset-0 bg-[#00000048]"></div>

            <div className="w-[430px] bg-white h-[650px] p-7 rounded-4xl absolute -top-50 left-40 flex gap-7 flex-col">
                <h4 className="text-4xl font-medium text-[#272443]">Get in Touch</h4>
                <p className="text-xl">I'm a paragraph. Click here to add your own text and edit me.</p>
                <div className="flex gap-5">
                    <span className="flex flex-col gap-2 "><p className="text-xl">First Name*</p><input type="text" className="border w-[100%] h-[45px] rounded-xl" /></span>
                    <span className="flex flex-col gap-2 "><p className="text-xl">First Name*</p><input type="text" className="border w-[100%] h-[45px] rounded-xl" /></span>
                </div>
                <span className="flex flex-col gap-2 "><p className="text-xl">Email*</p><input type="email" className="border w-[100%] h-[45px] rounded-xl" /></span>
                <span className="flex flex-col gap-2 "><p className="text-xl">Leave us a message...</p>
                    <textarea className="border w-[100%] h-[100px] rounded-[10px]" name="" id=""></textarea></span>
                <button className="w-[100%] py-[10px] text-xl rounded-xl hover:bg-[#FCFF77] hover:text-black transition-all ease-in duration-300 bg-[#272443] text-white">Submit</button>
            </div>

            <div className="w-[420px] 
            p-7 absolute flex flex-col justify-evenly gap-5 right-40 bottom-30 h-[300px] bg-[#DA392B] rounded-3xl">
                <h4 className="text-[24px] font-medium text-white">Subscribe to Our Newsletter</h4>
                <div className="flex flex-col gap-2 ">
                    <p className="text-xl text-white">Email*</p>
                    <input type="email" className=" w-[100%] border border-[#ffffff41] bg-[#ffffff41] h-[45px] rounded-xl" />

                </div>
                <div className="w-full flex items-center justify-center gap-2">
                    <span className="border border-white  w-[20px] h-[20px]"></span>
                    <p className="text-[15px] text-white w-[250px]">Yes, subscribe me to your newsletter. *</p>

                    <button className="px-[35px] py-[7px] rounded-[10px] text-[17px] hover:bg-white hover:text-black duration-300 transition-all ease-in bg-[#FCFF72]">Join</button>
                </div>
            </div>
        </section>
    )
}