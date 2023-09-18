import React from 'react';

import Link from 'next/link';

const TheHeader = () => {
    return (
        <header className='flex justify-between items-center px-[15%] w-full h-[80px] text-[#ffffff] text-[1.125rem] font-bold'>
            <Link href='/' className='hover:text-[#bf5af2] ease-in-out duration-500'>Главная</Link>

            <Link href='/homeworks' className='hover:text-[#bf5af2] ease-in-out duration-500'>Домашние задания</Link>

            <Link href='/design' className='hover:text-[#bf5af2] ease-in-out duration-500'>Проектирование</Link>

            <Link href='/labs' className='hover:text-[#bf5af2] ease-in-out duration-500'>Лабораторные и практические</Link>
        </header>
    );
};

export default TheHeader;