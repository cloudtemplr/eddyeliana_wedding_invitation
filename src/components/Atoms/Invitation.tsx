import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Invitation() {
    const [isNavigatorVisible, setIsNavigatorVisible] =
        useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        AOS.init();

        // when scrolled more than 300 , it is visible
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsNavigatorVisible(scrollTop >= 300 && scrollTop < 2000);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            <div className='my-32 mx-10'>
                <div
                    data-aos='fade-up'
                    data-aos-duration='3000'
                    className='flex-col '
                >
                    <div className='flex-col items-center text-center justify-center mb-10'>
                        <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                            INVITATION
                        </h3>
                        <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                            소중한 분들을 초대합니다
                        </h3>
                    </div>
                    <div className='relative flex justify-center px-10 text-center'>
                        <span
                            style={{ display: 'flex' }}
                            className='flex-col italic font-seoul text-stone-500 text-ms gap-2'
                        >
                            서로의 반쪽을 찾은 두 사람의
                            <div></div>
                            소망이 축복 속에서 
                            <div></div>
                            기쁨으로 이루어 지는 날
                            <div></div>
                            좋은 꿈과 바른 뜻으로 
                            <div></div>
                            살아 갈 수 있도록
                            <div></div>
                            따뜻한 마음으로
                            <div></div>
                            축하와 격려 해 주시면
                            <div></div>
                            더 없이 감사하겠습니다.
                            <div></div>
                            <div></div>
                        </span>
                    </div>
                </div>
                {/* 구분선 */}
                <div className='relative'>
                    <div className='relative p-[5rem]'>
                        <div className='border-l-2 h-[60px] translate-x-[50%]'></div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center font-arita p-2'>
                            <span className='font-extrabold font-seoul'>
                                김재웅
                            </span>
                            ·
                            <span className='font-extrabold font-seoul'>
                                김미정
                            </span>
                            <span className='font-extrabold font-seoul'>
                                의
                            </span>
                            <span className='pl-2 text-sm text-gray-800'>
                                장남
                            </span>
                            <span className='pl-2 text-2xl font-SunBatang translate-y-[-10%] text-gray-600'>
                                민석
                            </span>
                        </div>
                        <div className='flex justify-center items-center font-arita p-2'>
                            <span className='font-extrabold font-seoul'>
                                장준걸
                            </span>
                            ·
                            <span className='font-extrabold font-seoul'>
                                서정아
                            </span>
                            <span className='font-extrabold font-seoul'>
                                의
                            </span>
                            <span className='pl-2 text-sm text-gray-800'>
                                장녀
                            </span>
                            <span className='pl-2 text-2xl font-SunBatang translate-y-[-10%] text-gray-600'>
                                유현
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
