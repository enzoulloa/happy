import navLogo from '../assets/nav.svg'

const Navbar = () => {
  return (
    <nav className='w-full h-24 p-8 flex justify-between items-center shadow-xl fixed z-50 bg-primary lg:hidden left-0 top-0 right-0 bottom-auto m-auto'>
      <a className='w-32 align-middle transition ease-in duration-200' href='#happy'><img src={navLogo} alt='navLogo' /></a>
      <button id='navButton' aria-label='navButton' className=' cursor-pointer'>
        <span className=' text-black'>
          <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='24' width='24' xmlns='http://www.w3.org/2000/svg'><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M88 152h336M88 256h336M88 360h336' /></svg>
        </span>
      </button>
    </nav>
  )
}

export default Navbar
