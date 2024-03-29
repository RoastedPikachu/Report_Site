"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Page = () => {
  return (
    <>
      <TheHeader />

      <main className="relative w-full h-auto">
        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          {" "}
          Лабораторная работа №1
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/1.png">
              <img src="/static/1.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/10.png">
              <img src="/static/10.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/10.psd" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px] cursor-pointer">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/2.png">
              <img src="/static/2.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/11.png">
              <img src="/static/11.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/11.psd" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/3.png">
              <img src="/static/3.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/12.png">
              <img src="/static/12.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/12.psd" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/4.png">
              <img src="/static/4.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/13.png">
              <img src="/static/13.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/13.psd" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/5.png">
              <img src="/static/5.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/14.png">
              <img src="/static/14.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/14.png" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          {" "}
          Лабораторная работа №2
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/6.png">
              <img src="/static/6.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/16.png">
              <img src="/static/16.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/16.psd" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб2.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/7.png">
              <img src="/static/7.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результаты .png
            </h2>

            <a
              href="https://drive.google.com/drive/folders/1XF5cHiqXguEh9hnz_XpwQQqrTo-KdU97?usp=drive_link"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб2.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/8.jpg">
              <img src="/static/8.jpg" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/15.png">
              <img src="/static/15.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/15.png" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб2.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/9.JPG">
              <img src="/static/9.JPG" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/17.png">
              <img src="/static/17.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/17.psd" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб2.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/10.JPG">
              <img src="/static/10.JPG" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/18.png">
              <img src="/static/18.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/18.psd" className="w-full h-full">
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб2.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          Лабораторная работа №3
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/InitialMap.png">
              <img src="/static/InitialMap.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Map.png">
              <img src="/static/Map.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/Map.psd" className="w-full h-full">
              <img src="/static/Map.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП_521_ОтчетПоЛаб3.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          Айдентика
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide>
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Identika.png">
              <img src="/static/Identika.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          Мудборд
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide>
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Moodboard.png">
              <img src="/static/Moodboard.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="https://www.figma.com/file/yTeSHFIgSP4bJf5MoRWfXl/Agora-Project?type=design&node-id=236%3A51&mode=design&t=Tt6J8V7Egg0EhEmv-1"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          {" "}
          Лабораторная работа №5
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/2_1.png">
              <img src="/static/2_1.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/21.png">
              <img src="/static/21.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/21.psd" className="w-full h-full">
              <img src="/static/21.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб5.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/2_1.png">
              <img src="/static/2_1.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/linear.png">
              <img src="/static/linear.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/radial.png">
              <img src="/static/radial.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/conus.png">
              <img src="/static/conus.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/mirror.png">
              <img src="/static/mirror.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/romb.png">
              <img src="/static/romb.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП-521_ОтчетПоЛаб5.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          {" "}
          Лабораторная работа №6
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/2_2.png">
              <img src="/static/2_2.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/22.png">
              <img src="/static/22.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/22.psd" className="w-full h-full">
              <img src="/static/22.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/КарабутБорис_3ИСИП_521_ОтчетПоЛаб6.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          Салют гифка
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .gif
            </h2>

            <a href="/static/salute.gif">
              <img src="/static/salute.gif" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Пустота
            </h2>

            <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          Фары
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-[90%] text-[#bf5af2] text-[2rem] text-center font-bold">
              Изначальное изображение
            </h2>

            <a href="/static/Lights1.png">
              <img src="/static/Lights1.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Lights2.png">
              <img src="/static/Lights2.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Lights3.png">
              <img src="/static/Lights3.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/Lights.psd" className="w-full h-full">
              <img src="/static/Lights3.png" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>

        <h2 className="mt-[50px] mb-[20px] text-[#ffffff] text-[2rem] text-center font-bold">
          Лабораторная работа №4
        </h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}
          className="mt-[50px] mx-[5%] w-[90%] max-w-[1440px] h-[420px]"
        >
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Color1.png">
              <img src="/static/Color1.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Color2.png">
              <img src="/static/Color2.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Color3.png">
              <img src="/static/Color3.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Color4.png">
              <img src="/static/Color4.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Color5.png">
              <img src="/static/Color5.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .png
            </h2>

            <a href="/static/Color6.png">
              <img src="/static/Color6.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/Color1.psd" className="w-full h-full">
              <img src="/static/Color1.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/Color3.psd" className="w-full h-full">
              <img src="/static/Color3.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/Color4.psd" className="w-full h-full">
              <img src="/static/Color4.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/Color5.psd" className="w-full h-full">
              <img src="/static/Color5.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Результат .psd
            </h2>

            <a href="/static/Color6.psd" className="w-full h-full">
              <img src="/static/Color6.png" alt="" />
            </a>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center items-center w-[400px] h-[400px]">
            <h2 className="absolute w-full text-[#bf5af2] text-[2rem] text-center font-bold">
              Отчет
            </h2>

            <a
              href="/static/~$рабутБорис_3ИСИП-521_ОтчетПоЛаб4.docx"
              className="w-full h-full"
            >
              <div className="w-full h-full bg-[#747474] rounded-[10px]"></div>
            </a>
          </SwiperSlide>
        </Swiper>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
