import { images } from "@/Lib/AllDatas"
images
export default function Founders() {
    return (
        <section className="w-[85%] h-[550px] gap-10 flex flex-col  justify-center items-center bg-[#272443]">
            <h3 className="text-6xl suez-regular text-white">Meet the Founders</h3>
            <div className="flex justify-center items-center gap-10">
                {
                    images.map((items, index) => {
                        return (
                            <div key={index} className="w-[250px]  relative overflow-hidden rounded-3xl h-[330px] z-10 group">
                                <ul className="absolute h-[80px] flex-col w-full -bottom-20 flex justify-center items-center text-2xl bg-[#222222da] text-white z-99 group-hover:bottom-0 transition-all ease-in duration-500 ">
                                    <li className="suez-regular">{items.name}</li>
                                    <li className="text-xl">{items.work}</li>
                                </ul>
                                <img src={items.image} className="w-full h-full hover:scale-105 transition-all ease-in duration-500 absolute inset-0 z-5" alt="" />
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )

}