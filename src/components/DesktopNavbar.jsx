import navLogo from '../assets/nav.svg'

const DesktopNavbar = () => {
  return (
    <div className=' fixed top-0 left-0 right-0 bottom-auto z-50 m-auto hidden h-24 bg-primary p-8 shadow-xl lg:block'>
      <div className='w-full max-w-7xl flex items-center justify-between m-auto'>
        <a className='w-32 align-middle transition-all ease-in duration-200 will-change-[opacity] ' href='#happy'>
          <img src={navLogo} alt='navLogo' loading='eager' />
        </a>
        <div className=' flex h-full w-auto items-center '>
          <a className=' mx-0 p-5 px-4 text-sm text-gray-500 transition-all ease-in duration-200' href='#features'>
            Features
          </a>
          <a className=' mx-0 p-5 px-4 text-sm text-gray-500 transition-all ease-in duration-200' href='#pricing'>
            Pricing
          </a>
          <a className=' mx-0 p-5 px-4 text-sm text-gray-500 transition-all ease-in duration-200' href='#testimonials'>
            Testimonials
          </a>
          <a className=' mx-0 p-5 px-4 text-sm text-gray-500 transition-all ease-in duration-200' href='https://www.linkedin.com/in/enzo-ulloa-2639a1194/' target='_blank' rel='noreferrer'>
            Me
          </a>
          <a
            className=' my-2 mx-1 ml-2 cursor-pointer rounded-md bg-secondary py-3 px-6 text-center text-sm uppercase leading-5 tracking-widest text-primary transition-all ease-in duration-200'
            href='https://webflow.com/?r=0' target='_blank' rel='noreferrer'
          >
            GET TEMPLATE
          </a>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar
