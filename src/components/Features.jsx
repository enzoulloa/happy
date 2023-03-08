import PhoneCard from './PhoneCard'
import ScreenShot from '../assets/images/HappyScreenshot-500.jpeg'
import ScreenShot2 from '../assets/images/HappyScreenshot2-500.jpeg'
import ScreenShot3 from '../assets/images/HappyScreenshot3-p-500.jpeg'
import ScreenShot4 from '../assets/images/HappyScreenshot3-500.jpeg'
import ScreenShot6 from '../assets/images/HappyScreenshot7-p-500.jpeg'
import ScreenShot5 from '../assets/images/HappyScreenshot4-p-500.jpeg'
import CalendarIcon from '../assets/icons/HappyCalendarIcon.svg'
import FocusIcon from '../assets/icons/HappyFocusModeIcon.svg'
import ListIcon from '../assets/icons/HappyListsIcon.svg'
import SplitIcon from '../assets/icons/HappySplit-screenIcon.svg'
import UploadIcon from '../assets/icons/HappyUploadIcon.svg'
import VariedIcon from '../assets/icons/HappyVariedTypeIcon.svg'

const Features = () => {
  return (
    <section id='features' className=' bg-secondary text-primary py-10 relative overflow-hidden lg:py-24'>
      <div className=' relative w-full max-w-7xl mx-auto px-4'>
        <div className=' max-w-none mx-auto mb-10 text-center lg:max-w-xl animate-appearAnimation'>
          <h2 className=' opacity-80 text-sm font-semibold uppercase'>Features</h2>
          <h3 className=' my-3 text-3xl font-semibold'>The latest & greatest in <br /> phone photography</h3>
        </div>
        <div className=' grid auto-cols-fr gap-x-4 gap-y-4 grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <PhoneCard image={ScreenShot2} icon={CalendarIcon} color='blue-500' textColor='text-blue-500' />
          <PhoneCard image={ScreenShot3} icon={ListIcon} color='orange-500' textColor='text-orange-500' />
          <PhoneCard image={ScreenShot4} icon={VariedIcon} color='yellow-500' textColor='text-yellow-500' />
          <PhoneCard image={ScreenShot} icon={SplitIcon} color='fuchsia-500' textColor='text-fuchsia-500' />
          <PhoneCard image={ScreenShot5} icon={UploadIcon} color='cyan-400' textColor='text-cyan-400' />
          <PhoneCard image={ScreenShot6} icon={FocusIcon} color='violet-500' textColor='text-violet-500' />
        </div>
      </div>
    </section>
  )
}

export default Features
