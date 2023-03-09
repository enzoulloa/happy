import { useRef } from 'react'
import useObserver from '../hooks/useObserver'
import PhoneCard from './PhoneCard'
import ScreenShot from '../assets/images/HappyScreenshot-500.webp'
import ScreenShot2 from '../assets/images/HappyScreenshot2-500.webp'
import ScreenShot3 from '../assets/images/HappyScreenshot3-p-500.webp'
import ScreenShot4 from '../assets/images/HappyScreenshot3-500.webp'
import ScreenShot6 from '../assets/images/HappyScreenshot7-p-500.webp'
import ScreenShot5 from '../assets/images/HappyScreenshot4-p-500.webp'
import CalendarIcon from '../assets/icons/HappyCalendarIcon.svg'
import FocusIcon from '../assets/icons/HappyFocusModeIcon.svg'
import ListIcon from '../assets/icons/HappyListsIcon.svg'
import SplitIcon from '../assets/icons/HappySplit-screenIcon.svg'
import UploadIcon from '../assets/icons/HappyUploadIcon.svg'
import VariedIcon from '../assets/icons/HappyVariedTypeIcon.svg'

const Features = () => {
  const ref1 = useRef()
  const observer1 = useObserver(ref1)

  if (observer1 === true) {
    ref1.current.classList.remove('opacity-0')
    ref1.current.classList.add('opacity-100')
  }

  return (
    <section ref={ref1} id='features' className=' bg-secondary text-primary py-10 relative overflow-hidden lg:py-24  transition duration-300 ease-in-out opacity-0 will-change-[opacity]'>
      <div className=' relative w-full max-w-7xl mx-auto px-4'>
        <div className=' max-w-none mx-auto mb-10 text-center lg:max-w-xl'>
          <h2 className=' opacity-80 text-sm font-semibold uppercase'>Features</h2>
          <h3 className=' my-3 text-3xl font-semibold'>The latest & greatest in <br /> phone photography</h3>
        </div>
        <div className=' grid auto-cols-fr gap-x-4 gap-y-4 grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          <PhoneCard image={ScreenShot2} icon={CalendarIcon} text='Calendar View' color='bg-[#0278ed]' textColor='text-[#0278ed]' />
          <PhoneCard image={ScreenShot3} icon={ListIcon} text='Lists' color='bg-[#e01d1d]' textColor='text-[#e01d1d]' />
          <PhoneCard image={ScreenShot4} icon={VariedIcon} text='Varied type' color='bg-[#DB7900]' textColor='text-[#DB7900]' />
          <PhoneCard image={ScreenShot} icon={SplitIcon} text='Split-screen' color='bg-[#e738ce]' textColor='text-[#e738ce]' />
          <PhoneCard image={ScreenShot5} icon={UploadIcon} text='Uploads' color='bg-[#00A2B8]' textColor='text-[#00A2B8]' />
          <PhoneCard image={ScreenShot6} icon={FocusIcon} text='Focus mode' color='bg-[#b25df8]' textColor='text-[#b25df8]' />
        </div>
      </div>
    </section>
  )
}

export default Features
