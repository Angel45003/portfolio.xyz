import React from 'react'

function AboutMe() {
  return (
    <div className='h-[600px] w-[100%]'>
      <div>
        <h1 className='text-center p-[10px] text-[30px] font-medium text-[#222]'>About Me.</h1>
        <div className='w-[500px] p-[10px] ml-[50px] mt-[40px] shadow-slate-200 rounded-lg shadow-xl'>
            <section>
                <article className='text-center'>
                    <h1 className='p-[10px] text-[20px] text-slate-700 font-semibold'>Mi Introducción</h1>
                    <p className='p-[10px] pt-[10px] pl-[10px]'>Hola!, soy un Desarrollador Front End Developer, disponible para cualquier trabajo o desafío, cada día aprendiendo 
                    más cosas y manteniendome activo de cualquier noticia, amante de los videojuegos y del mundo de programación</p>
                    <div className='p-[10px]'>
                        <a href="#" className='bg-slate-200 p-[10px] text-slate-700 rounded-lg'>
                            <i class='bx bx-file'></i>
                            <span>Descargar CV</span>
                        </a>
                    </div>
                </article>
            </section>
            
        </div>
        <div className='absolute right-[60px] translate-y-[-250px]'>
            <h1>Mis Skills</h1>
            <div>
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>HTML</div>
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>CSS</div>
                <div className='bg-[#7461d9] w-[120px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>Javascript</div>
                <br />
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>React</div>
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>Vue.js</div>
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>Angular</div>
                <br />
                <div className='bg-[#7461d9] w-[120px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>Typescript</div>
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>Astro.JS</div>
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>Redux</div>
                <br />
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>Python</div>
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>Node.JS</div>
                <div className='bg-[#7461d9] w-[80px] p-[10px] text-white m-[16px] text-center rounded-lg cursor-pointer inline-block'>PHP</div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
