import { WhatTextData, WhatTextData2 } from "@/Lib/AllDatas"
import Founders from "../Founders/Founders"
WhatTextData
WhatTextData2

export default function WhatAbout() {

    return (
        <section className="w-full py-[150px] max-md:h-full relative bg-[url('/Images/AboutWhat-bg.avif')] bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-center">
            <div className="w-full h-full bg-[#f6f4f1cf] absolute inset-0 "></div>
            <div className="z-9 flex  justify-center items-center flex-col gap-15 max-md:gap-5">
                <h3 className="text-5xl suez-regular max-md:text-3xl text-[#272443]">What We Are About</h3>
                <div className="flex max-md:flex-col justify-center items-center gap-10 max-md:gap-5 ">
                    {WhatTextData.map((items, index) => {
                        return (
                            <ul key={index} className="w-[28%] max-md:w-[90%] p-[40px] rounded-3xl h-[250px] bg-white shadow-2xl flex flex-col gap-5">
                                <li className="text-3xl  font-sans font-medium text-[#DA392B]">{items.heading}</li>
                                <li className="text-[17px]">{items.paragraph}</li>
                            </ul>
                        )
                    })}

                </div>
                {WhatTextData2.map((items, index) => {
                    return (
                        <ul key={index} className="w-[58.5%] max-md:w-[90%] max-md:h-full p-[40px] rounded-3xl h-[200px] bg-white shadow-2xl flex flex-col gap-5">
                            <li className="text-3xl font-sans font-medium text-[#DA392B]">{items.heading}</li>
                            <li className="text-[17px]">{items.paragraph}</li>
                        </ul>
                    )
                })
                }
                <Founders />
            </div>

        </section>
    )
}