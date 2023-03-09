import phoneOverlay from '../assets/phone/phoneOverlay.webp'
import PhoneHardware from '../assets/phone/phoneHardware.webp'

const PhoneCard = ({ image, color, icon, textColor, text }) => {
  return (
    <article className='py-5 relative overflow-hidden w-auto rounded-2xl bg-primary text-secondary animate-[appear_1.8s_linear_2s_1_normal_both]'>
      <div>
        <div className='  w-3/5 mx-auto relative flex justify-center items-center'>
          <img className='  absolute left-0 top-0 right-0 bottom-0 w-full m-auto z-30' src={phoneOverlay} alt='Phone' loading='lazy' />
          <img className=' w-full max-w-max align-middle z-10 inline-block' src={PhoneHardware} alt='Phone' loading='lazy' />
          <img className='absolute left-0 top-0 right-0 bottom-0 h-[93.4%] m-auto z-20' src={image} alt='Phone' loading='lazy' />
        </div>
        <div className=' p-4 md:p-7 absolute left-0 top-auto right-0 bottom-0 flex h-auto flex-col justify-center items-center rounded-br-2xl rounded-bl-2xl shadow-lg text-center bg-primary z-30'>
          <div className={` ${color}  w-12 h-12 -mt-10 p-4 md:w-16 md:h-16 md:-mt-16 md:p-5 flex justify-center items-center rounded-full`}>
            <img className=' w-8 border-none' src={icon} alt='icon' loading='lazy' />
          </div>
          <h4 className={` ${textColor} mb-3 mt-5 text-2xl leading-8 font-medium`}>{text}</h4>
          <p className=' h-auto overflow-hidden max-w-full text-base leading-5 pt-0 pb-3'>Lorem sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
        </div>
      </div>
    </article>
  )
}

export default PhoneCard
