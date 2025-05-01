import { boxPositions } from '@/Lib/AllDatas';
import React from 'react';

export default function OurGame() {
    return (
        <section className="w-full h-full gap-20 flex flex-col justify-center pt-20 pb-20 items-center bg-[#F6F4F0]">
            <div className="w-[50%] text-center flex flex-col gap-5 items-center">
                <h2 className="text-5xl suez-regular text-[#272443]">Our Games</h2>
                <p className="text-[20px] text-[#272443]">
                    I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>

            <div className="w-[85%] h-[1000px] relative overflow-hidden flex justify-center items-center bg-[#F6F4F0]">
                <img className="w-full" src="/images/phonetreee.avif" alt="Phone Tree Game" />

                <div className="absolute inset-0 p-5 flex">
                    <div className="relative w-full h-full">
                        {boxPositions.map((pos) => (
                            <div key={pos.id} className={`absolute ${pos.className} w-[380px] h-[400px] p-[30px] rounded-2xl bg-white shadow-[5px_5px_10px_#FAC8C7]`}>
                                <div className="flex flex-col gap-7 py-[20px]">
                                    <div className="flex gap-5">
                                        <span className="shadow-[0_0_10px_#FAC8C7] w-[100px] h-[100px] flex justify-center items-center rounded-4xl">
                                            <img className="w-[85px] h-[85px] rounded-4xl" src={pos.image} alt="" />
                                        </span>
                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-3xl text-[#272443] suez-regular">{pos.heading}</h2>
                                            <p className="text-[20px]">{pos.Para}</p>
                                        </div>
                                    </div>
                                    <p className='text-[18px] text-[#272443]'>{pos.paragraph}</p>
                                    <div className='flex gap-5'><img className='w-[150px]' src={pos.apple} alt="" /><img className='w-[150px]' src={pos.playstore} alt="" /></div>
                                </div>
                            </div>
                        ))}
                        <img className="absolute bottom-0 right-0 w-[350px]" src="/images/Ghost-cute.avif" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
