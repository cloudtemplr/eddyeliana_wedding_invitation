import React from 'react';
import { FaBus } from 'react-icons/fa';
import { FaSubway } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';

export default function MapDesc() {
    return (
        <>
            <div className='my-4 rounded-sm'>
                <div className='flex items-center py-4'>
                    <FaBus className='text-3xl text-neutral-400' />
                    <h1 className='ml-4 font-suite font-[800]'>버스 이용 시</h1>
                </div>
                <div className='font-suite rounded-xl bg-stone-100 p-10'>
                    <ul className='list-disc'>
                        <li>서울세관 하차 시, (도보 1분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none mb-2'>
                            버스: 141, 3600
                        </li>
                        <li>서울세관사거리 하차 시, (도보 4분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            버스: 401, 6411, 8641, 강남08
                        </li>
                    </ul>
                </div>
            </div>
            <div className='rounded-sm'>
                <div className='flex items-center py-4'>
                    <FaSubway className='text-3xl text-rose-200' />
                    <h1 className='ml-4 font-suite'>지하철 이용 시</h1>
                </div>
                <div className='font-suite rounded-xl bg-rose-50 p-10'>
                    <ul className='list-disc'>
                        <li>7호선 강남구청역 3번 출구 하차 시, (도보 8분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            논현역 - 학동역 - <strong>강남구청역</strong> - 청담역
                        </li>
                        <li>7호선 학동역 10번 출구 하차 시, (도보 8분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            고속터미널역 - 반포역 - 논현역 - <strong>학동역</strong> - 강남구청역 - 청담역
                        </li>
                        <li>신분당선 강남구청역 3번 출구 하차 시, (도보 8분)</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            왕십리역 - 서울숲역 - 압구정로데오역 - <strong>강남구청역</strong> - 선정릉역
                        </li>
                    </ul>
                </div>
            </div>
            <div className='my-3 rounded-sm'>
                <div className='flex items-center py-4'>
                    <FaCar className='text-3xl text-lightgreen-200' />
                    <h1 className='ml-4 font-suite'>자가용 이용 시</h1>
                </div>
                <div className='font-suite rounded-xl bg-lightgreen-50 p-10'>
                    <ul className='list-disc'>
                        <li>네비게이션: &quot;셀럼앤어셈&quot; 또는 &quot;건설회관&quot; 입력</li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            도로명: &quot;서울시 강남구 언주로 711&quot; 입력
                        </li>
                        <li className='text-[18px] text-stone-600 font-kotra list-none'>
                            도로명: &quot;서울시 강남구 논현동 71-2&quot; 입력
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    );
}
