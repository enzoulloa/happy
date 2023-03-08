const Faq = () => {
  return (
    <section className=' bg-neutral-200 py-10 md:py-14 w-full mx-auto px-4'>
      <div className=' ml-0 text-left mr-auto mb-10 lg:max-w-7xl lg:mx-auto '>
        <h2 className=' my-2 text-3xl font-semibold'>FAQ</h2>
        <h5 className=' my-2 text-base leading-5 font-normal'>Some questions & some answers</h5>
      </div>
      <div className=' grid grid-cols-1 justify-between justify-items-start gap-4 lg:grid-cols-2 lg:max-w-7xl mx-auto'>
        <div>
          <p className=' text-lg font-medium mt-0 mb-2'>What devices does H(app)y support?</p>
          <p className=' mt-0 mb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
        </div>
        <div>
          <p className=' text-lg font-medium mt-0 mb-2'>How many megapixels does H(app)y support?</p>
          <p className=' mt-0 mb-2 '>Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
        </div>
        <div>
          <p className=' text-lg font-medium mt-0 mb-2'>Will my photos magically be more beautiful if I use this app?</p>
          <p className=' mt-0 mb-2 '>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit.</p>
        </div>
        <div>
          <p className=' text-lg font-medium mt-0 mb-2'>How many photos can I store in H(app)y?</p>
          <p className=' mt-0 mb-2 '>Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget
            consequat fringilla.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Faq
