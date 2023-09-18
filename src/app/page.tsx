'use client';
import React, { useState } from 'react';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

interface Task {
    id: number;
    type: string;
    date: string;
    link: string;
}

export default function Home() {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          type: 'Практическая работа',
          date: '18.09.23',
          link: 'none'
      },
      {
          id: 2,
          type: 'Практическая работа',
          date: 'undefined',
          link: 'none'
      }
  ] as Task[])

  return (
    <>
        <TheHeader/>

        <main className='relative px-[15%] mt-[50px] w-full h-[800px]'>
            <h2 className='text-[#ffffff] text-[2.25rem] font-bold'>Последние работы: </h2>

            {tasks.map((item:Task) => (
                <div key={item.id} className='flex items-center mt-[40px] w-full h-[100px] border-[3px] border-[#bf5af2] rounded-[15px] text-[#ffffff] text-[1.25rem] text-center'>
                    <span className='flex justify-center items-center w-[20%] h-full text-[2rem] border-r-2 border-[#bf5af2]'>№{ item.id }</span>

                    <span className='flex justify-center items-center w-[35%] h-full border-r-2 border-[#bf5af2]'>{ item.type }</span>

                    <span className='flex justify-center items-center w-[20%] h-full border-r-2 border-[#bf5af2]'>{ item.date }</span>

                    <span className='flex justify-center items-center w-[25%] h-full'>{ item.link }</span>
                </div>
            ))}

            <form className='mt-[50px] px-[20%] w-full h-auto'>
                <h3>Новая таска:</h3>

                <input type='text' placeholder='Введите тип' className='pl-[15px] w-full h-[50px] bg-[#0d0d0d] border-2 border-[#bf5af2] rounded-[10px] text-[#ffffff] text-[1rem] placeholder-[#ffffff] outline-none'/>

                <input type='text' placeholder='Введите дату выполнения' className='mt-[30px] pl-[15px] w-full h-[50px] bg-[#0d0d0d] border-2 border-[#bf5af2] rounded-[10px] text-[#ffffff] text-[1rem] placeholder-[#ffffff] outline-none'/>

                <input type='text' placeholder='Введите ссылку' className='mt-[30px] pl-[15px] w-full h-[50px] border-2 bg-[#0d0d0d] border-[#bf5af2] rounded-[10px] text-[#ffffff] text-[1rem] placeholder-[#ffffff] outline-none'/>

                <button className='ml-[calc(50%-125px)] mt-[50px] w-[250px] h-[60px] border-2 border-[#bf5af2] rounded-[20px] text-[#ffffff] ease-in-out duration-500 hover:mt-[55px]'>Добавить таску</button>
            </form>
        </main>

        <TheFooter/>
    </>
  )
}
