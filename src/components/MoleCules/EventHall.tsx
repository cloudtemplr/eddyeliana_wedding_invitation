import React from 'react';

export default function EventHall() {
    return (
        <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='my-32 mx-10'
        >
            <div className='flex-col items-center text-center justify-center mb-[5rem]'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    INFORMATION
                </h3>
                <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    저희 결혼식을 소개합니다
                </h3>
            </div>

            {/* 웨딩홀 */}
            <div className='mb-12 flex justify-around items-center'>
                <div className='basis-[25%]'>
                    <img
                        className='w-full rounded-[50%] '
                        alt='웨딩홀'
                        src='/images/hall.png'
                    />
                </div>
                <div className='flex-col pl-2 basis-2/3 items-center justify-center'>
                    <h3 className='font-seoul pl-[4%] pb-[2%] text-sm text-slate-900'>
                        단독 이벤트 홀 (디 아이올라홀)
                    </h3>
                    <div className='font-suite flex items-center text-[13px] h-[10%] break-keep rounded-xl bg-slate-100 p-4'>
                        본 예식은 2층 단독 이벤트 홀인 
                        디 아이올라홀에서 이뤄집니다.
                    </div>
                </div>
            </div>

            {/* 연회장 */}
            <div className='mb-12 flex justify-around items-center'>
                <div className='basis-[25%]'>
                    <img
                        className='w-full rounded-[50%]  '
                        alt='연회장'
                        src='/images/restaurant.jpg'
                    />
                </div>
                <div className='flex-col pl-2 basis-2/3 items-center justify-center '>
                    <h3 className='font-seoul pl-[4%] pb-[2%] text-sm text-slate-900'>
                        연회장
                    </h3>
                    <div className='font-suite text-[13px] flex justify-center items-center h-[10%] break-keep rounded-xl bg-slate-100 p-4'>
                        연회장은 지하에 위치하고 있으며, 3개의 홀로 공간 분할되어있습니다.
                        130여 가지 이상의 만찬 요리들이 부페로 준비되어 있습니다.
                    </div>
                </div>
            </div>

            {/* 주차장 */}
            <div className='mb-12 flex justify-around items-center'>
                <div className='basis-[25%]'>
                    <img
                        className='w-full rounded-[50%]'
                        alt='주차장'
                        src='/images/car.jpeg'
                    />
                </div>
                <div className='flex-col pl-2 basis-2/3 items-center justify-center '>
                    <h3 className='font-seoul pl-[4%] pb-[2%] text-sm text-slate-900'>
                        주차장
                    </h3>
                    <div className='font-suite text-[13px] flex justify-center items-center h-[10%] break-keep rounded-xl bg-slate-100 p-4'>
                        지상 주차장이 마련되어 있습니다. 동시 주차
                        800대까지 가능합니다
                    </div>
                </div>
            </div>
            <div className='text-center '>
                <span className='block font-naum text-[12px]'>
                    * 하객 분들은 2시간 무료주차가 가능합니다.
                </span>
            </div>
        </div>
    );
}
