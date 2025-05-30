import { images } from "@/Lib/AllDatas"
import Image from "next/image"
export default function Founders() {
    return (
        <section className="w-[85%] max-md:mt-[20px] max-md:w-full max-md:py-5 h-[550px] max-md:h-full gap-10 flex flex-col  justify-center items-center bg-[#272443]">
            <h3 className="text-6xl max-md:text-3xl suez-regular text-white">Meet the Founders</h3>
            <div className="flex  justify-center max-md:flex-col items-center gap-10">
                {
                    images.map((items, index) => {
                        return (
                            <div key={index} className="w-[250px]  relative overflow-hidden rounded-3xl max-md:h-[300px] h-[330px] group">
                                <ul className="absolute h-[80px] flex-col w-full -bottom-20 flex justify-center items-center text-2xl bg-[#222222da] text-white group-hover:bottom-0 transition-all ease-in duration-500 ">
                                    <li className="suez-regular">{items.name}</li>
                                    <li className="text-xl">{items.work}</li>
                                </ul>
                                <Image src={items.image} className="!w-full !h-full hover:scale-105 transition-all ease-in duration-500 absolute inset-0 z-5" alt=""  width={100} height={100}/>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )

}