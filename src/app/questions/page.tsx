'use client';
import React, { useState } from 'react';

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";

interface Question {
    id: number;
    question: string;
    answer: string;
}

const Page = () => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'Как организовать навигацию на сайте?',
            answer: ''
        },
        {
            id: 2,
            question: 'Как выбрать платформу для создания сайта?',
            answer: ''
        },
        {
            id: 3,
            question: 'Как создать логотип для сайта?',
            answer: ''
        },
        {
            id: 4,
            question: 'Как выбрать дизайн для сайта?',
            answer: ''
        },
        {
            id: 5,
            question: 'Какие шаги нужно выполнить для создания сайта?',
            answer: ''
        },
        {
            id: 6,
            question: 'Как выбрать хостинг для сайта?',
            answer: ''
        },
        {
            id: 7,
            question: 'Как выбрать доменное имя для сайта?',
            answer: ''
        },
        {
            id: 8,
            question: 'Как защитить сайт от взлома и хакерских атак?',
            answer: ''
        },
        {
            id: 9,
            question: 'Как добавить функцию обратного звонка на сайт?',
            answer: ''
        },
        {
            id: 10,
            question: 'Как добавить функцию регистрации и авторизации пользователей на сайте?',
            answer: ''
        },
        {
            id: 11,
            question: 'Как добавить возможность онлайн-оплаты на сайте?',
            answer: ''
        },
        {
            id: 12,
            question: 'Как создать лендинг страницу?',
            answer: ''
        },
        {
            id: 13,
            question: 'Как создать онлайн-магазин на сайте?',
            answer: ''
        },
        {
            id: 14,
            question: 'Как создать блог на сайте?',
            answer: ''
        },
        {
            id: 15,
            question: 'Как создать мобильную версию сайта?',
            answer: ''
        },
        {
            id: 16,
            question: 'Как добавить кнопки социальных сетей на сайт?',
            answer: ''
        },
        {
            id: 17,
            question: 'Как добавить анимацию на сайт?',
            answer: ''
        },
        {
            id: 18,
            question: 'Как оптимизировать скорость загрузки сайта?',
            answer: ''
        },
        {
            id: 19,
            question: 'Как использовать контент-менеджмент-систему для управления сайтом?',
            answer: ''
        },
        {
            id: 20,
            question: 'Как настроить резервное копирование сайта?',
            answer: ''
        },
        {
            id: 21,
            question: 'Как организовать кросс-браузерную совместимость для сайта?',
            answer: ''
        },
        {
            id: 22,
            question: 'Как внедрить возможность подписки на рассылку на сайте?',
            answer: ''
        },
        {
            id: 23,
            question: 'Как внедрить SSL-сертификат на сайт для обеспечения безопасности?',
            answer: ''
        },
        {
            id: 24,
            question: 'Как добавить мультиязычность на сайт?',
            answer: ''
        },
        {
            id: 25,
            question: 'Как создать редиректы на сайте?',
            answer: ''
        },
        {
            id: 26,
            question: 'Как провести тестирование и дальнейшую оптимизацию сайта?',
            answer: ''
        },
        {
            id: 27,
            question: 'Как добавить функционал на сайт (формы обратной связи, комментарии, интерактивность)?',
            answer: ''
        },
        {
            id: 28,
            question: 'Как оптимизировать сайт для поисковых систем (SEO)?',
            answer: ''
        },
        {
            id: 29,
            question: 'Как добавить контент на сайт (тексты, изображения, видео)?',
            answer: ''
        },
        {
            id: 30,
            question: 'Как настроить аналитику на сайте (Google Analytics, Я.Метрика)?',
            answer: ''
        },
    ] as Question[]);

    return (
        <>
            <TheHeader/>

            <main className='relative mt-[50px] px-[15%] pb-[50px] w-full h-auto min-h-[800px]'>
                <h2 className='text-[#ffffff] text-[2.25rem] font-bold'>Вопросы:</h2>

                {questions.map((item:Question) => (
                    <div key={item.id} className='flex items-center mt-[40px] w-full h-[110px] border-[3px] border-[#bf5af2] rounded-[15px] text-[#ffffff] text-[1.25rem] text-center'>
                        <p className='flex justify-center items-center w-[15%] h-full text-[2rem] border-r-2 border-[#bf5af2] font-bold'>№{item.id}</p>

                        <p className='flex justify-center items-center w-[42.5%] h-full text-[1.5rem] border-r-2 border-[#bf5af2]'>{item.question}</p>

                        <p className='flex justify-center items-center w-[42.5%] h-full text-[1.5rem] border-[#bf5af2]'>{item.answer}</p>
                    </div>
                ))}
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;