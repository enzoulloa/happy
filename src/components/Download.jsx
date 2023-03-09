import { useRef } from 'react'
import useObserver from '../hooks/useObserver'
import appStore from '../assets/AppStore.svg'

const Download = () => {
  const ref1 = useRef()
  const observer1 = useObserver(ref1)

  if (observer1 === true) {
    ref1.current.classList.remove('opacity-0')
    ref1.current.classList.add('opacity-100')
  }

  return (
    <section ref={ref1} className=' relative z-10 mx-auto mb-9 w-full max-w-7xl overflow-hidden py-10 px-4 text-center md:py-14  lg:max-w-xl transition duration-300 ease-in-out opacity-0'>
      <h3 className=' text-sm font-semibold uppercase leading-5 tracking-widest opacity-80'>
        Download
      </h3>
      <h4 className=' my-3 text-3xl font-semibold leading-9'>
        It's available right now!
      </h4>
      <p className=' mt-2 mb-2 text-lg font-medium leading-6 text-gray-600'>
        Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in
        convallis risus egestas non.
      </p>
      <button className=' mt-4 inline-block max-w-full bg-transparent'>
        <img
          className=' w-44 border-none'
          src={appStore}
          alt='App Store'
          loading='lazy'
        />
      </button>
    </section>
  )
}

export default Download
