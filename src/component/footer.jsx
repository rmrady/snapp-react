import React from 'react'
import logo2 from '../assets/img/logo2.png'
import logo3 from '../assets/img/logo3.png'

function footer() {
  return (
    <footer className='flex flex-col items-center pt-20'>
      <div>
        <ul className='flex justify-between text-[8px] lg:text-[16px]'>
          <li className='pl-3'>فرصت‌های شغلی</li>
          <li className='pl-3'>بلاگ</li>
          <li className='pl-3'>شرایط و قوانین</li>
          <li className='pl-3'>پنل سازمانی</li>
          <li className='pl-3'>سوالات متداول</li>
          <li className='pl-3'>باشگاه رانندگان</li>
          <li className='pl-3'>ثبت نام راننده اسنپ</li>
          <li className='pl-3'>درباره ما</li>
          <li className='pl-3'>تماس با ما</li>
        </ul>
      </div>
      <div className='mt-5'>
      <i className="bi bi-twitter text-[20px] text-gray-400 ml-5"></i>
      <i className="bi bi-instagram text-[20px] text-gray-400 ml-5"></i>
      <i className="bi bi-youtube text-[20px] text-gray-400 ml-5"></i>
      <i className="bi bi-linkedin text-[20px] text-gray-400 ml-5"></i>
      <i className="bi bi-telegram text-[20px] text-gray-400 ml-5"></i>

      </div>
      <div className='flex mt-5'>
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
      </div>

    </footer>
  )
}

export default footer