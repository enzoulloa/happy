import { useRef } from 'react'
import useObserver from '../hooks/useObserver'

const Statistics = () => {
  const ref1 = useRef()
  const observer1 = useObserver(ref1)

  if (observer1 === true) {
    ref1.current.classList.remove('opacity-0')
    ref1.current.classList.add('opacity-100')
  }

  return (
    <section className=' mx-auto w-full max-w-7xl overflow-hidden bg-[#e01d1d] py-10 px-4 text-center lg:py-24 xl:max-w-none'>
      <div ref={ref1} className=' grid auto-cols-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto transition duration-300 ease-in-out opacity-0 will-change-[opacity] '>
        <div className=' py-5'>
          <p className=' text-num font-semibold text-primary'>400+</p>
          <p className=' text-sm font-semibold uppercase tracking-[2px] text-primary '>
            Pictures analyzed
          </p>
        </div>
        <div className=' py-5 '>
          <p className=' text-num font-semibold text-primary'>25+</p>
          <p className=' text-sm font-semibold uppercase tracking-[2px] text-primary '>
            Operations per minute
          </p>
        </div>
        <div className=' hidden py-5 lg:block'>
          <p className=' text-num font-semibold text-primary'>95%</p>
          <p className=' text-sm font-semibold uppercase tracking-[2px] text-primary '>
            Accuracy
          </p>
        </div>
      </div>
    </section>
  )
}

export default Statistics
