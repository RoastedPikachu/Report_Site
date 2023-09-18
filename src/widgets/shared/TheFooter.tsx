import React from 'react';
import Link from "next/link";

const TheFooter = () => {
    return (
        <footer className='relative px-[15%] w-full h-[140px] text-[#ffffff] text-[1.125rem] font-bold'>
            <span className='flex justify-between items-center mt-[20px] h-[80px]'>
                <Link href='/' className='hover:text-[#bf5af2] ease-in-out duration-500 outline-none'>Главная</Link>

                <Link href='/homeworks' className='hover:text-[#bf5af2] ease-in-out duration-500 outline-none'>Домашние задания</Link>

                <Link href='/design' className='hover:text-[#bf5af2] ease-in-out duration-500 outline-none'>Проектирование</Link>

                <Link href='/labs' className='hover:text-[#bf5af2] ease-in-out duration-500 outline-none'>Лабораторные и практические</Link>
            </span>

            <p className='absolute bottom-[20px] w-[70%] text-[rgba(255,255,255,0.65)] text-[0.875rem] text-center'>©BKorobka prod. { (new Date()).getFullYear() }</p>
        </footer>
    );
};

export default TheFooter;