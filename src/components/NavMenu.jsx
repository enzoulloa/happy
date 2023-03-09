const NavMenu = () => {
  return (
    <div className=' absolute top-full left-0 right-0 w-full '>
      <div className=' top-0 h-auto bg-secondary text-primary w-auto absolute left-0 right-0 text-center overflow-visible flex flex-col'>
        <a className=' w-full mx-0 px-4 text-sm align-top no-underline p-5 hover:bg-black' href='#features'>Features</a>
        <a className=' w-full mx-0 px-4 text-sm align-top no-underline p-5 hover:bg-black' href='#pricing'>Pricing</a>
        <a className=' w-full mx-0 px-4 text-sm align-top no-underline p-5 hover:bg-black' href='#testimonials'>Testimonials</a>
        <a className=' w-full mx-0 px-4 text-sm align-top no-underline p-5 hover:bg-black' href='https://www.linkedin.com/in/enzo-ulloa-2639a1194/' target='_blank' rel='noreferrer'>Me</a>
        <a className=' w-full mx-0 px-4 text-sm align-top no-underline p-5 hover:bg-black' href='https://webflow.com/?r=0' target='_blank' rel='noreferrer'>Get Template</a>
      </div>
    </div>
  )
}

export default NavMenu
