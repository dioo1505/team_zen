import zen_img from "../../assets/zen_img.png";
const Zen = () => {
  return (
    <div className="container">
      <section className="flex justify-between items-center gap-[20px] px-[45px] mt-[40px]">
        <div className="boost_text ml-[70px]">
          <h2 className="nunito text-[38px] font-[400]">ZEN Care</h2>
          <p className="boost_frst_p nunito text-[18px] w-[439px] h-[78px] mb-[12px] mr-[125px]">
            Shopping online is usually a delightful experience. Until it's not.
          </p>
          <p className="boost_frst_p nunito text-[18px] w-[439px] h-[78px] mb-[20px] mr-[125px]">
            Until something you buy, proves to be faulty, missing or a totally
            wrong item, you’re in for long product return procedures.
          </p>
          <p className="boost_scnd_p nunito text-[18px] w-[439px] h-[78px] ">
            But, here comes ZEN Care: a free, built-in shopping protection. You
            can rest assured we’ll handle all of the transaction-related
            problems faster and with higher success rates. Where lone consumers
            can be ignored or dumped by dishonest merchants, ZEN doesn't get
            discouraged. ZEN persists.
          </p>
        </div>
        <div className="boost_img">
          <img className="w-[585px] h-[657px] ml-[80px]" src={zen_img} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Zen;
