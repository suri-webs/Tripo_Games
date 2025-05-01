export default function TreasureScreenShots() {
    return(
        <section className="w-full h-[600px] p-[20px] flex flex-col justify-center items-center  bg-[#F6F4F0]">
            <h2 className="text-4xl text-[#272443] suez-regular w-[89%]">Screenshots</h2>
            <div className="w-[90%] h-[80%] flex gap-10 justify-center items-center">
                <div className="w-[50%] h-[75%] overflow-hidden rounded-3xl"><img src="/images/T-Victory.avif" alt="" className="w-full h-full object-cover object-center hover:scale-107 transition-all ease-in duration-500 " /></div>
                <div className="w-[50%] h-[75%] overflow-hidden rounded-3xl"><img src="/images/T-box.avif" alt="" className="w-full h-full object-cover object-center hover:scale-107 transition-all ease-in duration-500 " /></div>
            </div>
        </section>
    )
}