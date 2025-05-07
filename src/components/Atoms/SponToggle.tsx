import React from 'react';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import SponDesc from './SponDesc';

export default function SponToggle() {
    const [toggle, setToggle] = useState<boolean>(false);
    const [anotherToggle, setAnotherToggle] = useState<boolean>(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    const anotherHandleToggle = () => {
        setAnotherToggle((prev) => !prev);
    };

    return (
        <>
            <div className='select-none p-8 relative flex-col justify-center'>
                <div className='pb-4'>
                    <div className='flex items-center justify-center'>
                        <div
                            className={`flex text-[18px] rounded-md p-2 bg-zinc-100 hover:bg-zinc-300 justify-center cursor-pointer font-SunBatang text-md w-full transition duration-300 
                            }`}
                            onClick={handleToggle}
                        >
                            신랑 측
                            {toggle ? (
                                <IoIosArrowDown className='ml-2 mt-2 animate-bounce' />
                            ) : (
                                <IoIosArrowUp className='ml-2 mt-2 animate-bounce' />
                            )}
                        </div>
                    </div>
                    {toggle && (
                        <>
                            <SponDesc
                                toggle={toggle}
                                bank='국민'
                                account='47900101143905'
                                family='아버지'
                                name='김재웅'
                            />
                            <SponDesc
                                toggle={toggle}
                                bank='국민'
                                account='48842588110975'
                                family='어머니'
                                name='김미정'
                            />
                            <SponDesc
                                toggle={toggle}
                                bank='신한'
                                account='110303832405'
                                family='신 랑'
                                name='민 석'
                            />
                        </>
                    )}
                </div>

                <div className='mt-6 flex items-center justify-center'>
                    <div
                        className={`flex text-[18px] rounded-md p-2 bg-rose-100 hover:bg-rose-200 justify-center cursor-pointer font-SunBatang text-md w-full transition duration-300 ${
                            anotherToggle ? 'ease-in' : 'ease-out'
                        }`}
                        onClick={anotherHandleToggle}
                    >
                        신부 측
                        {anotherToggle ? (
                            <IoIosArrowDown className='ml-2 mt-2 animate-bounce' />
                        ) : (
                            <IoIosArrowUp className='ml-2 mt-2 animate-bounce' />
                        )}
                    </div>
                </div>

                {/* 재사용 되는 부분 */}
                {anotherToggle && (
                    <>
                        <SponDesc
                            anotherToggle={anotherToggle}
                            bank='신한'
                            account='110250575050'
                            family='아버지'
                            name='장준걸'
                        />
                        <SponDesc
                            anotherToggle={anotherToggle}
                            bank='신한'
                            account='41102015311'
                            family='어머니'
                            name='서정아'
                        />
                        <SponDesc
                            anotherToggle={anotherToggle}
                            bank='신한'
                            account='110382282045'
                            family='신 부'
                            name='유 현'
                        />
                    </>
                )}
            </div>
        </>
    );
}
