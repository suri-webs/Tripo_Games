import { ReviewsData } from "@/Lib/AllDatas";
import { Star } from "lucide-react";
ReviewsData

export default function Reviews() {
    return (
        <section className="w-full h-[600px] gap-5 flex flex-col justify-center items-center bg-[#F6F4F0]">
            <div className="w-[90%] flex justify-start gap-15 items-center">
                <div className="w-[250px] h-[90px] flex justify-center items-center bg-white shadow-[0_0_10px_#2222] rounded-3xl">
                    <div className="w-[75%] h-[50%] bg-[#DA392B]  flex items-center justify-evenly rounded-full">
                        <Star className="fill-white w-[20px] text-white" /><div className="w-[75%] h-[80%] flex justify-center items-center bg-white rounded-full">
                            4.1 Rating</div></div>
                </div>
                <h2 className="text-5xl suez-regular text-[#272443]">Reviews</h2>
            </div>
            <div className="w-[90%] h-[50%]  flex justify-between items-center ">
                {ReviewsData.map((items,index) => {
                        return (
                            <div key={index} className="w-[30%] bg-white p-10 rounded-3xl shadow-[0_0_20px_#F3E2DD] h-[90%] flex justify-between items-start gap-5 flex-col">
                                <p className="text-xl text-[#2a2a2ac8]">{items.Paragraph}</p>
                                <h2 className="text-2xl font-medium  text-[#272443]">{items.Reviewittle}</h2>
                            </div>
                        )})
                }
            </div>
        </section>
    )
}