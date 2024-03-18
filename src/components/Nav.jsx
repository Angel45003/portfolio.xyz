import React from 'react'

export default function Nav() {
  return (
    <header className='w-[100%] sticky top-0 p-[10px] z-20 bg-[#ffffff9f] backdrop-blur-lg'>
        <nav>
            <ul className='inline-flex'>
                <li className='p-[16px]'><a href="#" className='text-[22px] font-bold text-[#31a09f]'>Nieto<b className='text-[#111]'>.</b></a></li>
                <div className='absolute left-[40%]'>
                    <li className='inline-block p-[18px]'><a href="#">Inicio</a></li>
                    <li className='inline-block p-[18px]'><a href="#">Sobre Mi</a></li>
                    <li className='inline-block p-[18px]'><a href="#">Proyectos</a></li>
                    <li className='inline-block p-[18px]'><a href="#">Contacto</a></li>
                </div>
            </ul>
        </nav>
    </header>
  )
}
