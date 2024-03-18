import Avatar from '../assets/avatar.png'
import React from 'react'

function BannerMain() {
  return (
    <div>
      <div className='mt-[15%] ml-[80px] max-w-[700px] mr-[20px] h-[100vh]'>
        <div className='bg-[#c3a73f] w-[70px] p-[6px] text-white rounded-lg m-[6px]'>
            <p>Nieto.js</p>
        </div>
        <h1 className='text-[60px] font-medium text-[#222]'>I'm <span className='text-[#2da3a7] font-semibold'>Designer</span></h1>
        <p className='p-[19px]'>Desarollador Front End y apasionado sobre la tecnología y el diseño web,
        cada dia mejorando mi programación</p>
        <div>
            <a href="#" className='p-[10px] rounded-lg bg-[#7461d9] text-white m-[10px]'>Más Info</a>
            <a href="#" className='bg-slate-200 p-[10px] text-slate-700 rounded-lg'>
                <i class='bx bx-file'></i>
                <span>Descargar CV</span>
            </a>
        </div>
        <div>
            <nav>
                <ul className='inline-flex p-[10px]'>
                    <li className='text-[25px] p-[15px] '>
                        <a href='#'><i class='bx bxl-instagram' ></i></a>
                    </li>
                    <li className='text-[25px] p-[15px] '>
                        <a href='#'><i class='bx bxl-twitter' ></i></a>
                    </li>
                    <li className='text-[25px] p-[15px] '>
                        <a href='#'><i class='bx bxl-github' ></i></a>
                    </li>
                </ul>
            </nav>
        </div>
        
      </div>
      <div>
         <img src={Avatar} className='rounded-full w-[700px] absolute right-[6%] top-[10%]' alt="" />
     </div>
    </div>
  )
}

export default BannerMain
