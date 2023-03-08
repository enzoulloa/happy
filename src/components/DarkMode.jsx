import phoneOverlay from '../assets/phone/phoneOverlay.png'
import phoneHardware from '../assets/phone/phoneHardware.png'
import screenShot from '../assets/images/HappyScreenshot3p-1080.jpeg'
import sun from '../assets/icons/SunIcon.svg'
import moon from '../assets/icons/MoonIcon.svg'

const DarkMode = () => {
  return (
    <section className=' bg-secondary text-primary relative overflow-hidden py-10 md:py-14 px-4 mx-auto w-full z-10  lg:py-24'>
      <div className=' mb-10 mx-auto text-center max-w-7xl  lg:max-w-xl animate-[appear_1s_linear_0s_1_normal_both]'>

        <h4 className=' opacity-80 text-sm font-semibold tracking-widest uppercase'>Dark Mode</h4>
        <h2 className=' my-2 text-3xl font-semibold'>Also available in dark.</h2>
        <p className=' my-2 text-lg leading-6 font-medium'>Don't get blinded when using the H(app)y app at night, just turn off the lights. Lorem ipsum dolor sit amet.</p>

        <div className=' flex flex-col-reverse overflow-hidden relative'>

          <div className=' flex justify-center items-center pt-5 border-t-2 border-primary relative z-30 bg-secondary '>
            <button className=' bg-transparent opacity-100 m-2 p-2 lg:m-3 lg:p-3 rounded-xl relative align-top cursor-pointer flex flex-col justify-center items-center'>
              <img className=' h-6 mb-1 border-none' src={sun} alt='Sun' />
              <p className=' opacity-80 text-sm font-semibold tracking-widest uppercase'>Light mode</p>
            </button>
            <button className=' bg-transparent opacity-100 m-2 p-2 rounded-xl relative align-top cursor-pointer flex flex-col justify-center items-center'>
              <img className=' h-6 mb-1 border-none' src={moon} alt='Sun' />
              <p className=' opacity-80 text-sm font-semibold tracking-widest uppercase'>Dark Mode</p>
            </button>

          </div>
          <div className=' relative block overflow-hidden md:px-8 lg:p-0'>

            <div className=' relative overflow-hidden mt-5 px-7 -mb-48 md:-mb-80 md:px-24 lg:px-24'>
              <div className=' relative -mb-8 w-full flex justify-center items-center md:-mb-28 lg:-mb-0'>
                <img className=' absolute left-0 top-0 right-0 bottom-0 w-full m-auto z-30' src={phoneOverlay} alt='Phone' />
                <img className=' w-full max-w-max align-middle z-10 inline-block' src={phoneHardware} alt='Phone' />
                <img className=' absolute left-0 top-0 right-0 bottom-0 h-[93.4%] align-middle m-auto z-20 inline-block' src={screenShot} alt='Phone' />

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default DarkMode
