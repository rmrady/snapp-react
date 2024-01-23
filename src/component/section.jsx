import React from 'react'
import img1 from '../assets/img/taxi.svg'
import img2 from '../assets/img/food.svg'
import img3 from '../assets/img/fdom-t.png'
import img4 from '../assets/img/hotel.svg'
import img5 from '../assets/img/bus.svg'
import img6 from '../assets/img/moving.svg'
import img7 from '../assets/img/investment.svg'

import img8 from '../assets/img/bike.svg'
import img9 from '../assets/img/pickup.svg'
import img10 from '../assets/img/intflight.svg'
import img11 from '../assets/img/hotel.svg'
import img12 from '../assets/img/train.svg'
import img13 from '../assets/img/driver.svg'
import img14 from '../assets/img/Credit.svg'

import img15 from '../assets/img/spdiscount.png'
import img16 from '../assets/img/spdiscount.png'
import img17 from '../assets/img/insdiscount.png'
import img18 from '../assets/img/doctor.svg'
import img19 from '../assets/img/pharmacy.svg'
import img20 from '../assets/img/shop.svg'
import img21 from '../assets/img/club.svg'

import capture1 from '../assets/img/capture1.png'
import images from '../assets/img/images.jfif'
import easy from '../assets/img/easy.png'
import fast from '../assets/img/fast.png'
import eco from '../assets/img/eco.png'

function section() {
    return (
        <section className='flex flex-col items-center mt-10'>

            {/* section1 */}
            <div className='w-[100%] bg-slate-200 lg:px-32 py-10 '>
                <h2 className='text-[40px] text-center font-bold'>یک اپلیکیشن، برای تمام نیازها</h2>
                <div className='w-full lg:w-[95%] flex items-center mt-10'>
                    {/* ------------------------ */}
                    <div className='w-[35%]'>

                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img1} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold text-[10px] lg:text-lg'>تاکسی اینترنتی</p>
                                <p className='hidden md:block text-gray-300 text-[11px]'>امکان درخواست آنلاین خودرو با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center  p-5 mt-8'>
                            <img src={img2} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'> سفارش آنلاین غذا </p>
                                <p className='hidden md:block text-gray-300 text-[11px]'>سفارش غذا، نان و شیرینی با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center  p-5 mt-8'>
                            <img className='w-[55%] md:w-[35%] lg:w-[20%]' src={img3} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>بلیط پرواز داخلی </p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>گردشگری با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img4} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>رزرو هتل</p>
                                <p className='hidden md:block text-gray-300'>گردشگری با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img5} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>بلیط اتوبوس</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>گردشگری با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img6} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>اسباب‌کشی منزل</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>حمل و نقل با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img7} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold text-[10px] lg:text-lg'>سرمایه‌گذاری</p>
                                <p className='hidden md:block text-gray-300 text-[11px]'>خدمات غیر حضوری بورس و سرمایه‌گذاری</p>
                            </div>
                        </div>

                    </div>
                    {/* ------------------------ */}
                    <div className='w-[35%] mx-10'>

                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img8} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'> پیک موتوری</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>حمل و نقل با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img9} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>درخواست وانت</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>حمل و نقل با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img10} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>بلیط پرواز خارجی</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>گردشگری با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img11} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>رزرو اقامتگاه</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>گردشگری با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img12} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>بلیط قطار</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>گردشگری با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img13} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>ثبت نام راننده</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>ثبت نام تاکسی اینترنتی اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img14} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>سرویس اعتباری</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>پرداخت با اسنپ</p>
                            </div>
                        </div>

                    </div>
                    {/* ------------------------- */}
                    <div className='w-[35%]'>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img className='w-[55%] md:w-[35%] lg:w-[20%]' src={img15} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>سوپرمارکت آنلاین</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>تهیه اقلام روزانه با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img className='w-[55%] md:w-[35%] lg:w-[20%]' src={img16} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold  text-[10px] lg:text-lg'>اسنپ اکسپرس</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>تحویل کمتر از ۳۰ دقیقه</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img className='w-[55%] md:w-[35%] lg:w-[20%]' src={img17} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold'>بیمه</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>خرید آنلاین بیمه با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img18} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold text-[10px] lg:text-lg'>پزشک و مشاور</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>درمان با اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img19} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold'>داروخانه</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>داروخانه آنلاین اسنپ</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img20} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold'>فروشگاه</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>خرید از فروشگاه های معتبر شهر</p>
                            </div>
                        </div>
                        <div className='w-[90%] bg-white rounded-xl flex flex-col lg:flex-row items-center p-5 mt-8'>
                            <img src={img21} alt="" />
                            <div className='text-center lg:text-right'>
                                <p className='font-bold'>اسنپ! ‌کلاب</p>
                                <p className='hidden md:block text-gray-300 text-[14px]'>باشگاه مشتریان اسنپ!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* section2 */}
            <div className='p-20 text-center'>
                <img className='w-[90%]' src={capture1} alt="" />
            </div>

            {/* section3 */}
            <div className='p-20 '>
                <div className='flex'>
                    <img className='w-[50%]' src={images} alt="" />
                    <div className='w-[35%] mr-10'>
                        <h3 className='text-[25px] font-bold  mb-5'>سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h3>
                        <p className='text-gray-500'>اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.</p>
                    </div>
                </div>
                <div className='flex px-32 mt-[-40px]'>
                    <div>
                        <div className=' bg-slate-200 rounded-2xl px-8 py-3'><img src={easy} alt="" /></div>
                        <h3 className='text-[20px] font-bold mt-3'>آسان</h3>
                        <p className='text-[14px] text-gray-400 mt-5'>برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.</p>
                    </div>
                    <div className='mx-20'>
                        <div className=' bg-slate-200 rounded-2xl  py-3'><img  src={fast} alt="" /></div>
                        <h3 className='text-[20px] font-bold mt-3'>سریع</h3>
                        <p className='text-[14px] text-gray-400 mt-5'>قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.</p>
                    </div>
                    <div>
                        <div className=' bg-slate-200 rounded-2xl px-8 py-3'><img src={eco} alt="" /></div>
                        <h3 className='text-[20px] font-bold mt-3'>به صرفه</h3>
                        <p className='text-[14px] text-gray-400 mt-5'>سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default section