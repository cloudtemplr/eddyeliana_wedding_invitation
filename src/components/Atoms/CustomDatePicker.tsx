import { differenceInDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import CalendarDate from './CalendarDate';

export default function CustomDatePicker() {
    const weddingDate = new Date(2025, 6, 5); // 2025년 7월 5일 (월은 0-based)
    const daysRemain = differenceInDays(weddingDate, new Date());

    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div data-aos='fade-up' data-aos-duration='2000'>
            <div className='flex-col text-center items-center justify-center p-6 border-b-2'>
                <p className='italic text-gray-600 font-naum pb-6 mb-6'>
                    THE WEDDING DAY
                </p>
                <p className='text-xl py-4 font-seoul'>
                    2025년 7월 5일 토요일
                </p>
                <p className='font-seoul text-[18px]'>오후 3시 30분</p>
            </div>

            {/* ✅ 달력에 날짜 전달 */}
            <CalendarDate weddingDate={weddingDate} />

            <div>
                {daysRemain > 0 && (
                    <div className='py-6 flex justify-center items-center font-kotra'>
                        <span>D-Day까지</span>
                        <span
                            className={`${
                                isVisible ? 'opacity-100' : 'opacity-0'
                            } transition duration-700 ease-in-out text-rose-500 px-4 text-2xl after:content-["♥︎"]`}
                        >
                            {daysRemain}일
                        </span>
                        <span>남았습니다</span>
                    </div>
                )}
                {daysRemain === 0 && (
                    <div className="py-6 text-center font-kotra text-2xl text-rose-600">
                        오늘은 결혼식 날입니다! ♥︎
                    </div>
                )}
                {daysRemain < 0 && (
                    <div className="py-6 text-center font-kotra text-gray-500">
                        결혼식이 지나갔습니다.
                    </div>
                )}
            </div>
        </div>
    );
}
