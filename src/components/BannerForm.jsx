import React from 'react'

function BannerForm() {
  return (
    <form className='mt-[400px]'>
        <h1 className='text-center text-[30px] font-normal p-[10px]'>¡Contactame!</h1>
        <div className='bg-[#7461d9] text-white absolute left-0 w-[800px] rounedd-lg p-[10px] h-[600px] items-center'>
            <div className='w-[400px] m-0 m-auto mt-[20%]'>
                <h1 className='p-[10px] text-[30px] font-normal'>Contactame!</h1>
                <label className='p-[10px]'>nietoh@gmail.com</label>
                <br />
                <label className='p-[10px] mt-[20px]'> Telefono +57-999-999-999</label>
            </div>
            
        </div>
        <div className='absolute right-[20px]'>
            <div>
                <input type="text" placeholder='UserName' className='p-[6px] border-slate-300 outline-none border-2 ml-[6px] mb-[6px]' />
                <input type="email" placeholder='Email' className='p-[6px] border-slate-300 outline-none border-2 ml-[6px] mb-[6px]' />
            </div>
            <textarea placeholder='Mensaje' className='resize-none text-center p-[18px] w-[460px] h-[150px] outline-none border-slate-300 bg-white border-2'></textarea>
            <button className='w-[200px] block bg-[#7461d9] p-[6px] rounded-lg m-[6px] text-white'>Enviar</button>
        </div>
        
    </form>
  )
}

export default BannerForm
