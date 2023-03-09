import navLogo from '../assets/nav.svg'

const DesktopNavbar = () => {
  return (
    <nav className=' fixed top-0 left-0 right-0 bottom-auto z-50 w-full m-auto hidden h-24 items-center justify-between bg-primary p-8 shadow-xl lg:flex '>
      <div className=' fixed top-0 left-0 right-0 bottom-auto z-50 max-w-7xl m-auto hidden h-24 w-full items-center justify-between bg-primary p-8 shadow-xl lg:flex'>
        <a className='w-32 align-middle transition-all ease-in duration-200' href='#happy'>
          <img src={navLogo} alt='navLogo' loading='eager' />
        </a>
        <div className=' flex h-full w-auto items-center '>
          <a className=' mx-0 p-5 px-4 text-sm text-gray-500 transition-all ease-in duration-200' href=''>
            Features
          </a>
          <a className=' mx-0 p-5 px-4 text-sm text-gray-500 transition-all ease-in duration-200' href=''>
            Pricing
          </a>
          <a className=' mx-0 p-5 px-4 text-sm text-gray-500 transition-all ease-in duration-200' href=''>
            Testimonials
          </a>
          <a className=' mx-0 p-5 px-4 text-sm text-gray-500 transition-all ease-in duration-200' href=''>
            Instruction
          </a>
          <a
            className=' my-2 mx-1 ml-2 cursor-pointer rounded-md bg-secondary py-3 px-6 text-center text-sm uppercase leading-5 tracking-widest text-primary transition-all ease-in duration-200'
            href=''
          >
            GET TEMPLATE
          </a>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNavbar
