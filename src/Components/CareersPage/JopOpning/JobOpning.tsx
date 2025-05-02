import { JobOpningData } from "@/Lib/AllDatas"
JobOpningData

export default function JobOpning() {
    return (

        <section className="w-full h-[1000px] max-md:h-full flex justify-center items-center bg-[#F6F4F0]" >
            <div className="w-[89%] max-md:w-full h-[100%] bg-[#DA392B] flex flex-col gap-10 items-center justify-center p-[40px] ">
                <h2 className="text-white text-[52px] max-md:text-[40px] suez-regular pt-10 ">Job Openings</h2>
                <div className="w-full h-full max-md:flex-col  flex justify-between items-center">
                    {JobOpningData.map((items, index) => {
                        return (
                            <div key={index} className="w-[320px] p-[20px] flex flex-col gap-5 h-[80%]">
                                <div className="w-[100%] overflow-hidden h-[250px] rounded-3xl">
                                    <img className="w-full h-full hover:scale-105 transition-all ease-in duration-300 " src={items.image} alt="" />
                                </div>
                                <ul className="text-white">
                                    <li className="text-2xl font-medium">{items.title}</li>
                                    <li className="text-xl">{items.post}</li>
                                </ul>
                                <p className="text-white text-[15px] w-[95%] font-medium" >{items.paragraph}</p>
                                <button className="text-white w-fit px-[45px] rounded-2xl text-xl py-2.5 bg-[#272443]">Apply</button>
                            </div>
                        )
                    })}
                </div>

            </div>

        </section >
    )
}