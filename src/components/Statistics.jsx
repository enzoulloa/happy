const Statistics = () => {
  return (
    <section className=' mx-auto w-full max-w-7xl overflow-hidden bg-[#e01d1d] py-10 px-4 text-center lg:py-24 xl:max-w-none'>
      <div className=' grid auto-cols-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>
        <div className=' py-5 animate-[appear_1s_linear_0s_1_normal_both]'>
          <p className=' text-num font-semibold text-primary'>400+</p>
          <p className=' text-sm font-semibold uppercase tracking-[2px] text-primary '>
            Pictures analyzed
          </p>
        </div>
        <div className=' py-5 animate-[appear_1s_linear_.5s_1_normal_both]'>
          <p className=' text-num font-semibold text-primary'>25+</p>
          <p className=' text-sm font-semibold uppercase tracking-[2px] text-primary '>
            Operations per minute
          </p>
        </div>
        <div className=' hidden py-5 lg:block animate-[appear_1s_linear_1s_1_normal_both]'>
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
