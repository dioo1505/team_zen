import boost_img from '../../assets/boost_img.png'


const Boost = () => {
  return (
    <div className='container'>
      <section className='flex justify-between items-center gap-[20px] px-[45px] mt-[40px]'>
        <div className="boost_img">
          <img className='w-[585px] h-[657px] ml-[80px]' src={boost_img} alt="" />
        </div>
        <div className="boost_text">
          <h2 className='nunito text-[38px] font-[400]'>1-year warranty boost</h2>
          <p className='boost_frst_p nunito text-[18px] w-[439px] h-[78px] mb-[12px] mr-[125px]'>ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.</p>
          <p className='boost_scnd_p nunito text-[18px] w-[439px] h-[78px] '>When you buy any electronics with your ZEN shopping Mastercard®, their warranty gets extended by one year. How does it work? It simply does. Automatically.</p>
          <p></p>
        </div>
      </section>
    </div>
  )
}

export default Boost
