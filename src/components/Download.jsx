import appStore from '../assets/AppStore.svg'

const Download = () => {
  return (
    <section className=' relative z-10 mx-auto mb-9 w-full max-w-7xl overflow-hidden py-10 px-4 text-center md:py-14  lg:max-w-xl animate-[appear_1s_linear_0s_1_normal_both]'>
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
        />
      </button>
    </section>
  )
}

export default Download
