import React, { useRef, useState } from 'react'
import logo from '../assets/img/snappTextLogo.svg'
import img1 from '../assets/img/img1.png'
import badge from '../assets/img/badge1.png'
import bazaar from '../assets/img/bazaar.png'
import market from '../assets/img/market.png'
import snapp from '../assets/img/snapp-pwa.png'
import app from '../assets/img/app_store.svg'

function Header() {
    const [inp1, setInp1] = useState('09XXXX6789')
    const hambrgr = useRef()
    function show(){
        hambrgr.current.classList.toggle('hidden')
    }
  return (
    <header className='w-[100%] '>

        {/* hamberger menu */}
        <div className='lg:hidden w-full h-[80px] flex justify-between px-5 pt-5'>
        <p onClick={show} className=' cursor-pointer'>|||</p>
        <p className='p-2'><img src={logo} alt="" /></p>
        
        <div ref={hambrgr} className='hidden w-[60%] h-[100vh] bg-white absolute top-0 cursor-pointer '>
            <p onClick={show} className='text-[20px] font-bold border-b border-gray-300 p-4'>x</p>
            <ul className='w-[70%]  text-gray-500 p-4 '>
                <li className='py-6'>فرصت های شغلی</li>
                <li className='py-6'>بلاگ</li>
                <li className='py-6'>باشگاه رانندگان</li>
                <li className='py-6'> ثبت نام راننده اسنپ<span className='text-green-400'>(سواری موتور وانت)</span></li>
                <li className='py-6'>پنل سازمانی</li>
                <li className='py-6'>درباره ما</li>
                <li className='py-6 '>تماس با ما</li>
            </ul>
            <p className='text-[15px] text-green-400 font-bold border-t border-gray-300 p-4'>اپلیکیشن اسنپ</p>
        </div>
        </div>
        
        
        {/* menu asli */}
        <div className='hidden lg:flex w-[100%] h-[100px] cursor-pointer  px-28'>
            <ul className='xl:w-[70%] flex justify-around text-gray-500 pt-5'>
                <li className='p-2'><img src={logo} alt="" /></li>
                <li className='p-2'>فرصت های شغلی</li>
                <li className='p-2'>بلاگ</li>
                <li className='p-2'>باشگاه رانندگان</li>
                <li className='p-2'>ثبت نام راننده اسنپ</li>
                <li className='p-2'>پنل سازمانی</li>
                <li className='p-2'>درباره ما</li>
                <li className='p-2'>تماس با ما</li>
            </ul>
        </div>


        <div className='w-[100%] lg:h-[500px] flex'>
            <div className='w-[100%] lg:w-[50%] lg:h-[500px]  bg-green-600 px-10 py-5'>
                <h2 className='text-[28px]  text-white font-bold lg:pr-40 pt-5'>تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!</h2>
                <p className='text-[18px] xl:text-[20px] text-white  lg:pr-40 pt-5'>از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، رزرو هتل و... را میتوانید با اسنپ انجام دهید.</p>

                <div className='flex'>
                <input className= 'hidden lg:block w-[40%] border-b border-white bg-green-600 text-gray-300 lg:mr-40 mt-8' type="text" value={inp1} onChange={(e)=>e.target.value}/>
                <button className='hidden lg:block h-10 text-green-500 font-bold bg-white rounded-lg  px-4 mr-2 mt-8 '>ارسال لینک</button>
                </div>
                <button className='hidden lg:block bg-green-600 text-gray-100 font-bold px-5 py-3 border border-white rounded-md mr-40 mt-8'>ورود به وب اپلیکیشن اسنپ</button>
                <button className='lg:hidden w-[90%] bg-white font-bold text-[17px] rounded-lg py-2 mt-5'>دانلود اپلیکیشن اسنپ</button>

            </div>
            <div className='hidden lg:block w-[50%] h-[500px] '>
                <img src={img1} alt="" className='w-[100%] lg:h-[500px] '/>
            </div>
        </div>


        <div className='hidden lg:flex justify-center my-14'>
            <img className='w-[14%] p-5' src={badge} alt="" />
            <img className='w-[14%] p-5' src={bazaar} alt="" />
            <img className='w-[14%] p-5' src={market} alt="" />
            <img className='w-[14%] p-5' src={snapp} alt="" />
            <img className='w-[14%] p-5' src={app} alt="" />

        </div>
    </header>
  )
}

export default Header