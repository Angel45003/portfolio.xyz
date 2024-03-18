import React from 'react'


function BannerProjects() {
  return (
    <div className='w-[800px] m-0 m-auto'>
        <div className='w-[200px] shadow-slate-300 shadow-lg bg-white text-center inline-block m-[12px] rounded-lg cursor-pointer inline-block'>
            <div className='text-[44px] text-slate-800'>
                <i class='bx bxs-user' ></i>
            </div>
            <section>
                <article className='p-[10px]'>
                    <h1>Clientes</h1>
                    <p className='p-[6px] text-slate-800'>+25 clientes felices</p>
                </article>
            </section>
            
        </div>

        <div className='w-[200px] shadow-slate-300 shadow-lg bg-white text-center inline-block m-[12px] rounded-lg cursor-pointer inline-block'>
            <div className='text-[44px] text-slate-800'>
            <i class='bx bx-shield-plus'></i>
            </div>
            <section>
                <article className='p-[10px]'>
                    <h1>Experiencia</h1>
                    <p className='p-[6px] text-slate-800'>+7 Años de trabajo</p>
                </article>
            </section>
            
        </div>


        <div className='w-[200px] shadow-slate-300 shadow-lg bg-white text-center inline-block m-[12px] rounded-lg cursor-pointer inline-block'>
            <div className='text-[44px] text-slate-800'>
            <i class='bx bxs-terminal' ></i>
            </div>
            <section>
                <article className='p-[10px]'>
                    <h1>Completado</h1>
                    <p className='p-[6px] text-slate-800'>+17 proyectos listos</p>
                </article>
            </section>
            
        </div>
    </div>
  )
}

export default BannerProjects
