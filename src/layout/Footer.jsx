import happy from '../assets/HappyVertical.svg'
import twitter from '../assets/icons/TwitterIcon.svg'
import instagram from '../assets/icons/InstagramIcon.svg'
import facebook from '../assets/icons/FacebookIcon.svg'

const Footer = () => {
  return (
    <footer className=' py-10 px-4  w-full max-w-7xl text-center'>
      <div className=' grid grid-cols-2 text-center gap-4 mx-auto'>
        <div className=' row-span-1 col-span-2 mx-auto'>
          <img className=' w-32 ' src={happy} alt='HappyLogo' />
        </div>
        <div className=' row-span-1 col-span-2 mt-2 flex justify-center'>
          <a className=' text-gray-500 mr-5 opacity-80 underline max-w-full' href=''>
            <img className=' mr-2 h-6 w-6' src={twitter} alt='' />
          </a>
          <a className=' text-gray-500 mr-5 opacity-80 underline max-w-full text-center' href=''>
            <img className=' mr-2 h-6 w-6' src={instagram} alt='' />
          </a>
          <a className=' text-gray-500 opacity-80 underline max-w-full' href=''>
            <img className=' mr-2 h-6 w-6' src={facebook} alt='' />
          </a>
        </div>
        <div className=' row-span-1 col-span-2 mt-2'>
          <p className=' text-gray-400'>Powered by
            <a className=' text-gray-600 underline' href=''> Webflow</a>
            . All rights reserved by Happy Apps, Inc.
            <a className=' text-gray-600 underline' href=''> Licensing</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
