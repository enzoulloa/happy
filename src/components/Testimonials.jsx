import { useRef } from 'react'
import useObserver from '../hooks/useObserver'
import pam from '../assets/profileImages/PamBeesly.jpg'
import angela from '../assets/profileImages/AngelaSchrute.jpg'
import michael from '../assets/profileImages/MichaelScott.jpg'

const Testimonials = () => {
  const ref1 = useRef()
  const observer1 = useObserver(ref1)

  if (observer1 === true) {
    ref1.current.classList.remove('opacity-0')
    ref1.current.classList.add('opacity-100')
  }

  return (
    <section ref={ref1} id='testimonials' className=' relative z-10 mx-auto w-full max-w-7xl overflow-hidden py-10 px-4 text-center md:py-14 transition duration-300 ease-in-out opacity-0'>
      <div className=' mb-10'>
        <h4 className=' text-sm font-semibold uppercase leading-5 tracking-widest opacity-80'>
          Testimonials
        </h4>
        <h2 className=' mb-3 text-3xl font-semibold leading-9'>
          Don't take our word for it.
        </h2>
        <p className=' mt-2 mb-2 text-lg font-medium leading-6 text-gray-600'>
          See what our customers are saying.
        </p>
      </div>
      <div className=' grid grid-cols-1 justify-between gap-4 text-left lg:grid-cols-3'>
        <article className=' mx-auto flex w-full max-w-md flex-col justify-between rounded-2xl p-7'>
          <p className=' mt-0 mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus.
          </p>
          <div className=' ml-0 mt-2 flex items-center text-zinc-900'>
            <img
              className=' h-12 w-12 overflow-hidden rounded-full border-2 border-solid border-slate-200 object-cover'
              src={pam}
              alt='Pam Beesly'
              loading='lazy'
            />
            <div className=' pl-2'>
              <p className=' text-base font-medium leading-5'>Pam Beesly</p>
              <p className=' text-sm '>Dunder Mifflin</p>
            </div>
          </div>
        </article>
        <article className=' mx-auto flex w-full max-w-md flex-col justify-between rounded-2xl p-7'>
          <p className=' mt-0 mb-2'>
            Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus
            libero ac, cursus quam. Aenean porta neque eget consequat fringilla.
          </p>
          <div className=' ml-0 mt-2 flex items-center text-zinc-900'>
            <img
              className=' h-12 w-12 overflow-hidden rounded-full border-2 border-solid border-slate-200 object-cover'
              src={michael}
              alt='Michael Scott'
              loading='lazy'
            />
            <div className=' pl-2'>
              <p className=' text-base font-medium leading-5'>Michael Scott</p>
              <p className=' text-sm '>Dunder Mifflin</p>
            </div>
          </div>
        </article>
        <article className=' mx-auto flex w-full max-w-md flex-col justify-between rounded-2xl p-7'>
          <p className=' mt-0 mb-2'>
            Vestibulum ultrices, orci nec egestas pharetra, ligula est semper
            enim, nec auctor sapien leo nec purus.
          </p>
          <div className=' ml-0 mt-2 flex items-center text-zinc-900'>
            <img
              className=' h-12 w-12 overflow-hidden rounded-full border-2 border-solid border-slate-200 object-cover'
              src={angela}
              alt='Angels Schrute'
              loading='lazy'
            />
            <div className=' pl-2'>
              <p className=' text-base font-medium leading-5'>Angels Schrute</p>
              <p className=' text-sm '>Dunder Mifflin</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
