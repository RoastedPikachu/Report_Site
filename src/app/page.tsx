'use client';
import React, { useState } from 'react';

import { taskSlice } from '@/store/storeReducers/TaskSlice';
import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { RootState } from "@/store";

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

interface Task {
    id: number;
    type: string;
    date: string;
    link: string;
}

export default function Home() {
  const dispatch = useAppDispatch();

  const tasks = useAppSelector((state:RootState) => state.tasksSlice.tasks);

  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');

  const { addTask, clearTasks } = taskSlice.actions;

  return (
    <>
        <TheHeader/>

        <main className='relative mt-[50px] px-[15%] pb-[50px] w-full h-auto min-h-[800px]'>
            {tasks.length && <h2 className='text-[#ffffff] text-[2.25rem] font-bold'>Последние работы: </h2>}

            <div>
                {tasks.length && tasks.map((item:Task) => (
                    <div key={item.id} className='flex items-center mt-[40px] w-full h-[100px] border-[3px] border-[#bf5af2] rounded-[15px] text-[#ffffff] text-[1.25rem] text-center'>
                        <span className='flex justify-center items-center w-[20%] h-full text-[2rem] border-r-2 border-[#bf5af2] font-bold'>№{ item.id }</span>

                        <span className='flex justify-center items-center w-[35%] h-full border-r-2 border-[#bf5af2]'>{ item.type }</span>

                        <span className='flex justify-center items-center w-[20%] h-full border-r-2 border-[#bf5af2]'>{ item.date }</span>

                        <span className='flex justify-center items-center w-[25%] h-full'>{ item.link }</span>
                    </div>
                ))}

                {tasks.length && <button type='button' onClick={() => dispatch(clearTasks())} className='ml-[calc(50%-125px)] mt-[50px] w-[250px] h-[60px] border-2 border-[#bf5af2] rounded-[20px] text-[#ffffff] ease-in-out duration-500 hover:translate-y-[5px]'>Удалить все таски</button>}
            </div>

            <form className='mt-[50px] px-[20%] w-full h-auto'>
                <h3 className='text-[#ffffff] text-[2.25rem] font-bold text-center'>Новая таска</h3>

                <input type='text' onChange={(event) => setType(event.target.value)} placeholder='Введите тип' className='mt-[30px] pl-[15px] w-full h-[50px] bg-[#0d0d0d] border-2 border-[#bf5af2] rounded-[10px] text-[#ffffff] text-[1rem] placeholder-[#ffffff] outline-none'/>

                <input type='text' onChange={(event) => setDate(event.target.value)} placeholder='Введите дату выполнения' className='mt-[30px] pl-[15px] w-full h-[50px] bg-[#0d0d0d] border-2 border-[#bf5af2] rounded-[10px] text-[#ffffff] text-[1rem] placeholder-[#ffffff] outline-none'/>

                <input type='text' onChange={(event) => setLink(event.target.value)} placeholder='Введите ссылку' className='mt-[30px] pl-[15px] w-full h-[50px] border-2 bg-[#0d0d0d] border-[#bf5af2] rounded-[10px] text-[#ffffff] text-[1rem] placeholder-[#ffffff] outline-none'/>

                <button type='button' onClick={() => dispatch(addTask({id: +(Math.random() * 1000).toFixed(0), type: type, date: date, link: link}))} className='ml-[calc(50%-125px)] mt-[50px] w-[250px] h-[60px] border-2 border-[#bf5af2] rounded-[20px] text-[#ffffff] ease-in-out duration-500 hover:translate-y-[5px]'>Добавить таску</button>
            </form>
        </main>

        <TheFooter/>
    </>
  )
}
