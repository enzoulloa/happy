import phoneOverlay from '../assets/phone/phoneOverlay.png'
import phoneHardware from '../assets/phone/phoneHardware.png'
import screenShot3 from '../assets/images/HappyScreenshot3-500.jpeg'
import screenShot2 from '../assets/images/HappyScreenshot-500.jpeg'

const Technology = () => {
  return (
    <>
      <section className=' py-10 px-4 md:py-14 overflow-hidden relative z-10 w-full max-w-7xl mx-auto lg:py-24'>
        <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 '>
          <div className=' row-span-2 col-span-1 self-center lg:max-w-md justify-self-center animate-[appear_1s_linear_0s_1_normal_both]'>
            <h4 className=' text-sm opacity-80 leading-5 font-semibold tracking-widest uppercase'>Technology</h4>
            <h2 className=' my-3 text-3xl leading-9 font-semibold'>Use H(app) y to give your digital photos some pop.</h2>
            <p className=' mt-0 mb-3 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis odit numquam recusandae officia culpa ratione atque labore quas molestiae, nam quis assumenda commodi consectetur sunt nobis veniam, eius laudantium accusantium!</p>
          </div>
          <div className=' px-7 md:px-12 lg:px-24 animate-[appear_1s_linear_.5s_1_normal_both]'>
            <div className=' relative flex justify-center items-center w-full -mb-52 row-span-2 col-span-1 self-center justify-self-center lg:self-start lg:-mb-72'>

              <img className=' absolute left-0 top-0 right-0 bottom-0 w-full m-auto z-30' src={phoneOverlay} alt='Phone' />
              <img className=' w-full max-w-max align-middle z-10 inline-block' src={phoneHardware} alt='Phone' />
              <img className=' absolute left-0 top-0 right-0 bottom-0 h-[93.4%] align-middle m-auto z-20 inline-block' src={screenShot3} alt='Phone' />
            </div>
          </div>
        </div>
      </section>
      <section className=' py-10 px-4 md:py-14 overflow-hidden relative z-10 w-full max-w-7xl mx-auto lg:py-24'>
        <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 '>

          <div className=' row-span-2 col-span-1 self-center md:order-last lg:max-w-md justify-self-center animate-[appear_1s_linear_.5s_1_normal_both]'>
            <h4 className=' text-sm opacity-80 leading-5 font-semibold tracking-widest uppercase'>Speed & security</h4>
            <h2 className=' my-3 text-3xl leading-9 font-semibold'>State-of-the-art processing capabilities.</h2>
            <p className=' mt-0 mb-3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <div className=' px-7 md:px-12 lg:px-24 animate-[appear_1s_linear_0s_1_normal_both]'>
            <div className=' relative flex justify-center items-center w-full -mb-52 row-span-2 col-span-1 self-center justify-self-center lg:self-start lg:-mb-72'>
              <img className=' absolute left-0 top-0 right-0 bottom-0 w-full m-auto z-30' src={phoneOverlay} alt='Phone' />
              <img className=' w-full max-w-max align-middle z-10 inline-block' src={phoneHardware} alt='Phone' />
              <img className=' absolute left-0 top-0 right-0 bottom-0 h-[93.4%] align-middle m-auto z-20 inline-block' src={screenShot2} alt='Phone' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technology
