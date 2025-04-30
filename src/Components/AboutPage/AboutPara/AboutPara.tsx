import { dataWhat } from "@/Lib/OurGameData"

export default function ABoutPara() {
    dataWhat
    return (
        <section className="w-full h-[650px] flex justify-center items-center">
            <div className="w-[40%] h-full bg-[url('/Images/AboutPra-bg.avif')] bg-cover bg-center bg-no-repeat bg-fixed" ></div>
            <div className="w-[60%] h-full flex justify-center items-center bg-[#DA392B]" >
                <ul className="text-white text-2xl flex flex-col w-[70%] gap-8">
                    {dataWhat.map((items,index) => {
                            return (<li key={index} >{items.paragraph}</li>)
                        })}
                </ul>
            </div>

        </section>
    )
}