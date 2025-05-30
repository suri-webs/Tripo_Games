import { boxPositions } from '@/Lib/AllDatas';
import Image from 'next/image';
import React from 'react';

export default function OurGame() {
    return (
        <section className="w-full h-[1500px]  max-md:h-[700px] gap-20 flex flex-col max-md:justify-start justify-center pt-20 pb-20 items-center bg-[#F6F4F0]">
            <div className="w-[50%] max-sm:w-full text-center flex flex-col gap-5 items-center">
                <h2 className="text-5xl max-sm:text-2xl suez-regular  text-[#272443]">Our Games</h2>
                <p className="text-[20px] max-sm:w-[90%] max-sm:text-[15px] text-[#272443]">
                    Im a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>

            <div className="w-[85%] h-fit relative overflow-hidden flex justify-center items-center bg-[#F6F4F0]">
                <Image className="!w-full" src="/images/phonetreee.avif" alt="Phone Tree Game" width={1500} height={100}/>

                <div className="absolute inset-0 p-5 max-md:hidden flex ">
                    <div className="relative max-md:flex w-full h-full">
                        {boxPositions.map((pos) => (
                            <div key={pos.id} className={`absolute  ${pos.className} w-[380px] max-md:h-[45%] h-[38%] p-[30px] rounded-2xl bg-white shadow-[5px_5px_10px_#FAC8C7]`}>
                                <div className="flex flex-col gap-7 py-[20px]">
                                    <div className="flex gap-5">
                                        <span className="shadow-[0_0_10px_#FAC8C7] w-[100px] h-[100px] flex justify-center items-center rounded-4xl">
                                            <Image className="!w-[85px] !h-[85px] rounded-4xl" src={pos.image} alt="" width={100} height={1000} />
                                        </span>
                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-3xl text-[#272443] suez-regular">{pos.heading}</h2>
                                            <p className="text-[20px]">{pos.Para}</p>
                                        </div>
                                    </div>
                                    <p className='text-[18px] text-[#272443]'>{pos.paragraph}</p>
                                    <div className='flex gap-5'><Image className='!w-[150px]' src={pos.apple} alt="" width={100} height={100}/><Image className='w-[150px]' src={pos.playstore} alt=""  width={100} height={100}/></div>
                                </div>
                            </div>
                        ))}
                        <Image className="absolute bottom-0 right-0 !w-[350px]" src="/images/Ghost-cute.avif" alt="" width={100} height={1000}/>
                    </div>
                </div>

                
            </div>
        </section>
    );
}
