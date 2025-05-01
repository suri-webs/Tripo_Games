export default function TreasureRobotHead() {
    return (
        <section className="w-full h-[1100px] flex justify-center items-end  bg-[#F6F4F0]">
            <div className="w-full h-[70%] relative bg-[url('/Images/Treasure-Bg.avif')] bg-cover bg-center bg-no-repeat bg-fixed ">
            <div className="flex justify-center  absolute -top-45 left-20 shadow-2xl rounded-3xl px-15 py-20 flex-col bg-white w-[45%] h-[80%] gap-5 ">
                    <div className="flex gap-7">
                        <span className="shadow-[0_0_10px_#FAC8C7] w-[100px] h-[100px] flex justify-center items-center rounded-4xl">
                            <img className="w-[85px] h-[85px] rounded-4xl" src={"/images/trasture-box.avif"} alt="" />
                        </span>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl text-[#272443] suez-regular">{"Treasure Box"}</h2>
                            <p className="text-[22px]">{"Adventure - Free"}</p>
                        </div>
                    </div>

                    <p className='text-[45px] suez-regular leading-15 text-[#272443] w-full'>{"A Free-to-Play Adventure Game That Seriously Packs a Punch"}</p>
                    <p className='text-[20px] text-[#272443]'>{"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}</p>
                    
                </div>
            </div>
        </section>
    )
}