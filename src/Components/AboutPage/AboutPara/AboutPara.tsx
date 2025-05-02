import { dataWhat } from "@/Lib/AllDatas"

export default function ABoutPara() {
    dataWhat
    return (
        <section className="w-full h-[650px] max-md:flex-col max-md:h-full flex justify-center items-center">
            <div className="w-[40%] h-full max-md:h-[300px] max-md:w-full  bg-[url('/Images/AboutPra-bg.avif')] bg-cover bg-center bg-no-repeat bg-fixed max-md:bg-scroll" ></div>
            <div className="w-[60%] max-md:w-full max-md:py-5 h-full flex justify-center items-center bg-[#DA392B]" >
                <ul className="text-white max-md:text-[15px] text-2xl flex flex-col max-md:w-[90%] w-[70%] gap-8">
                    {dataWhat.map((items,index) => {
                            return (<li key={index} >{items.paragraph}</li>)
                        })}
                </ul>
            </div>

        </section>
    )
}