const Pricing = () => {
  return (
    <section className=' relative z-10 mx-auto w-full max-w-7xl overflow-hidden py-10 px-4 md:py-14 lg:py-24'>
      <div className=' mx-auto mb-10 max-w-none text-center lg:max-w-xl animate-[appear_1s_linear_0s_1_normal_both]'>
        <h3 className=' text-sm font-semibold uppercase leading-5 tracking-widest opacity-80'>
          Pricing
        </h3>
        <h4 className=' my-2 text-3xl font-semibold leading-9'>
          A plan for every need.
        </h4>
        <p className=' mt-2 mb-2 text-lg font-medium leading-6 text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque aliquam odio et faucibus.
        </p>
      </div>
      <div className=' grid grid-cols-1 justify-between gap-4 md:grid-cols-3'>
        <article className=' w-full overflow-hidden rounded-3xl py-5 px-10 text-center text-[#0273E3] opacity-100 '>
          <h3 className=' my-2 text-lg font-medium leading-6'>Standard</h3>
          <div className=' mb-2 flex flex-col items-center justify-center'>
            <p className=' text-num font-semibold tracking-[-8px] lg:text-9xl'>
              $9
            </p>
            <p className=' text-sm font-semibold uppercase tracking-[2px] text-secondary opacity-80'>
              Monthly
            </p>
          </div>
          <button className=' mx-1 my-2 cursor-pointer rounded bg-[#0273E3] px-6 py-3 text-sm uppercase tracking-[2px] text-primary'>
            BUY NOW
          </button>
        </article>
        <article className=' w-full overflow-hidden rounded-3xl py-5 px-10 text-center text-[#e01d1d] opacity-100 '>
          <h3 className=' my-3 text-lg font-medium leading-6'>Premium</h3>
          <div className=' mb-2 flex flex-col items-center justify-center'>
            <p className=' text-num font-semibold tracking-[-8px] lg:text-9xl'>
              $99
            </p>
            <p className=' text-sm font-semibold uppercase tracking-[2px] text-secondary opacity-80'>
              Anually
            </p>
          </div>
          <button className=' mx-1 my-2 cursor-pointer rounded bg-[#e01d1d] px-6 py-3 text-sm uppercase tracking-[2px] text-primary'>
            BUY NOW
          </button>
        </article>
        <article className=' w-full overflow-hidden rounded-3xl py-5 px-10 text-center text-[#B36200] opacity-100 '>
          <h3 className=' my-3 text-lg font-medium leading-6'>Lifetime</h3>
          <div className=' mb-2 flex flex-col items-center justify-center'>
            <p className=' text-num font-semibold tracking-[-8px] lg:text-9xl'>
              $149
            </p>
            <p className=' text-sm font-semibold uppercase tracking-[2px] text-secondary opacity-80'>
              Up front
            </p>
          </div>
          <button className=' mx-1 my-2 cursor-pointer rounded bg-[#B36200] px-6 py-3 text-sm uppercase tracking-[2px] text-primary'>
            BUY NOW
          </button>
        </article>
      </div>
    </section>
  )
}

export default Pricing
