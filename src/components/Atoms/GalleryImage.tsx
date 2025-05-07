import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { IoIosClose } from 'react-icons/io';

export default function GalleryImage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isResizing, setIsResizing] = useState({ width: 0, height: 0 });

    const images = [
        '/images/1.jpeg',
        '/images/2.jpeg',
        '/images/3.jpeg',
        '/images/4.jpeg',
        '/images/5.jpeg',
        '/images/6.jpeg'
    ];

    const handleImageClick = (image: string) => {
        if (image === '/images/wedding10.jpeg') {
            setSelectedImage('/images/real2.jpeg');
        } else if (image === '/images/wedding11.jpeg') {
            setSelectedImage('/images/real1.jpeg');
        } else {
            setSelectedImage(image);
        }
    };

    /** 모달창, 바깥과 x버튼 클릭 시 닫힘 */
    const handleModalClose = () => {
        setSelectedImage(null);
    };

    // Modal에서 스크린리더에서 이미지가 아닌 다른 부분까지 읽는 에러 해결
    if (typeof window !== 'undefined') {
        Modal.setAppElement('#__next');
    }

    return (
        // 이미지 호버 시 , 이미지 클릭 시 이벤트 발생
        <div className='grid grid-cols-2 gap-3 place-items-center'>
            {images.map((image) => (
                <motion.img
                    key={image}
                    src={image}
                    alt='Gallery'
                    className='rounded-md cursor-pointer mw-[200px] mh-[200px] w-full h-full'
                    onClick={() => handleImageClick(image)}
                    whileHover={{
                        scale: 1.1,
                        opacity: 0.3,
                        transition: { duration: 0.3 },
                    }}
                />
            ))}

            <Modal
                isOpen={selectedImage !== null}
                onRequestClose={handleModalClose}
                ariaHideApp={false}
                style={{
                    content: {
                        width: '80%', // 모달창의 너비
                        height: '80%', // 모달창의 높이
                        top: '50%', // 모달창의 수직 위치 (중앙 정렬)
                        left: '50%', // 모달창의 수평 위치 (중앙 정렬)
                        transform: 'translate(-50%, -50%)', // 모달창을 수평 및 수직으로 정확히 가운데로 위치시키는 변형
                        // overflow: 'hidden',
                    },
                }}
            >
                {selectedImage && (
                    // 해상도에 따른 이미지 반응형 작업
                    <img
                        className='mw-[480px] h-auto'
                        src={selectedImage}
                        alt='select-image'
                    />
                )}
                <button
                    className='absolute top-5 right-5'
                    onClick={handleModalClose}
                >
                    <IoIosClose className='text-5xl text-rose-300 hover:text-rose-600' />
                </button>
                <div className='p-4 text-center text-sm text-slate-600'>
                    <span className='italic font-seoul'>
                        부부로서 함께 시작하는 인생 2막
                    </span>
                    <div className='italic flex-col gap-2 p-6 font-seoul text-slate-400 text-[12px]'>
                        부부는 실과 바늘이라고 합니다.
                        <div></div>실 가는 데 바늘이 가고
                        <div></div>
                        바늘 가는 곳에 실 따라가듯이
                        <div></div>어느 하나 서로가 없이는 완전치 못하고
                        <div></div>
                        둘 다 온전히 상생할 때 공동의 목표에 도달하는 것처럼
                        <div></div>
                        <div></div>
                        마주보며 또 같은 방향을 향해 조화를 이루며
                        <div></div>
                        정성스레 발맞춰 나아 간 우리 여정, 그 끝이
                        <div></div>
                        한 편의 아름다운 걸작으로 남을 수 있도록
                        <div></div>
                        아끼고 존중하고 사랑할 것을 약속합니다.
                    </div>
                </div>
            </Modal>
        </div>
    );
}
