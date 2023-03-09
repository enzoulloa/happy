import { useRef } from 'react'
import useObserver from '../hooks/useObserver'
import mainLogo from '../assets/nav.svg'
import phoneOverlay from '../assets/phone/PhoneOverlay.webp'
import phoneHardware from '../assets/phone/PhoneHardware.webp'
import screenShot from '../assets/images/HappyScreenshot-500.webp'

const Happy = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const observer1 = useObserver(ref1)
  const observer2 = useObserver(ref2)

  if (observer1 === true) {
    ref1.current.classList.remove('opacity-0')
    ref1.current.classList.add('opacity-100')
  }

  if (observer2 === true) {
    ref2.current.classList.remove('opacity-0')
    ref2.current.classList.add('opacity-100')
  }

  return (
    <section id='happy' className=' py-10 overflow-hidden relative lg:py-24 px-4 xl:max-w-7xl xl:mx-auto'>
      <div className=' h-24' />
      <div className=' grid grid-cols-1 auto-cols-fr md:gap-4 md:grid-cols-2 lg:grid-cols-2 '>
        <div ref={ref1} className='  row-span-2 col-span-1 relative z-10 w-full max-w-7xl mx-auto px-4 justify-self-center xl:self-center xl:max-w-md transition duration-300 ease-in-out opacity-0 will-change-[opacity]'>
          <img src={mainLogo} alt='Happy' loading='eager' />
          <h1 className=' font-bold text-5xl mt-6'>The future of digital photos.</h1>
          <p className=' my-4'>The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!</p>
          <div className=' flex text-center flex-col md:justify-center md:items-center  md:flex-row lg:justify-start '>
            <a className=' bg-secondary text-primary w-[146px] py-[11px] px-[25px] rounded-md text-sm leading-4 tracking-widest my-2 mx-1 inline-block uppercase cursor-pointer text-center ' href='https://webflow.com/templates/html/happy-app-website-template' target='_blank' rel='noreferrer'>Download</a>
            <a className=' bg-secondary text-primary w-[146px] py-[11px] rounded-md text-sm leading-4 tracking-widest my-2 mx-1 inline-block uppercase cursor-pointer text-center md:m-3' href='#features'>Read More</a>
          </div>
        </div>

        <div ref={ref2} className='transition duration-500 ease-in-out opacity-0'>
          <div className=' row-span-2 col-span-1 self-center justify-self-center px-12 lg:px-24'>
            <div className=' relative flex justify-center items-center w-full mt-7 -mb-52 lg:-mb-72'>
              <img className=' absolute left-0 top-0 right-0 bottom-0 w-full m-auto z-30' src={phoneOverlay} alt='Phone' loading='eager' />
              <img className=' w-full max-w-max align-middle z-10 inline-block' src={phoneHardware} alt='Phone' loading='eager' />
              <img className=' absolute left-0 top-0 right-0 bottom-0 h-[93.4%] align-middle m-auto z-20 inline-block' src={screenShot} alt='Phone' loading='eager' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Happy
