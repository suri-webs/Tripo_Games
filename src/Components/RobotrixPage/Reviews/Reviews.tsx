import {  RobotReviewsData } from "@/Lib/AllDatas";
import { Star } from "lucide-react";
export default function Reviews() {
    return (
        <section className="w-full h-[600px] max-lg:h-full max-lg:py-[50px] gap-5 flex flex-col justify-center items-center bg-[#F6F4F0]">
            <div className="w-[90%] flex justify-start max-sm:justify-center  max-lg
            :justify-center gap-15 max-sm:gap-5 items-center">
                <div className="w-[250px] h-[90px] max-sm:w-[150px] max-sm:h-[60px] max-sm: flex justify-center items-center bg-white shadow-[0_0_10px_#2222] rounded-3xl">
                    <div className="w-[75%] h-[50%] bg-[#DA392B] max-sm:w-[90%] max-sm:h-[70%] flex items-center justify-evenly rounded-full">
                        <Star className="fill-white w-[20px] text-white" /><div className="w-[75%] h-[80%] flex justify-center items-center bg-white rounded-full">
                            4.2 Rating</div></div>
                </div>
                <h2 className="text-5xl max-sm:text-3xl suez-regular text-[#272443]">Reviews</h2>
            </div>
            <div className="w-[90%] h-[50%] max-lg:gap-10 flex justify-between max-lg:justify-center max-lg:flex-col items-center ">
                {RobotReviewsData.map((items,index) => {
                        return (
                            <div key={index} className="w-[30%] max-lg:w-[90%] bg-white p-10 rounded-3xl shadow-[0_0_20px_#F3E2DD] h-[90%] flex justify-between items-start gap-5 flex-col">
                                <p className="text-[17px] text-[#2a2a2ac8]">{items.Paragraph}</p>
                                <h2 className="text-2xl font-medium  text-[#272443]">{items.Reviewittle}</h2>
                            </div>
                        )})
                }
            </div>
        </section>
    )
}