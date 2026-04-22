import currencies from "../../assets/currencies.png";

const Currencies = () => {
  return (
    <div className="container mx-auto">
      <section className="flex justify-between items-center gap-[20px] px-[75px] py-[10px] mt-[40px]">
        <div className="currencies_text">
          <h2 className="nunito text-[36px] font-[400] leading-tight mb-[20px] text-[#222222]">
            One app, one account,
            <br /> many currencies
          </h2>
          <p className="currencies_frst_p nunito text-[16px] w-[400px] mb-[12px]">
            ZEN Mastercard® was made for spending money. ZEN account is here to
            store and manage it peacefully, from the inside of your pocket.
          </p>
          <p className="currencies_scnd_p nunito text-[16px] w-[400px]">
            You can use it just like a regular account, as it has its own IBAN
            and works just the way any bank account would — but better. Store up
            to 30 currencies and transfer them easily in many ways.
          </p>
        </div>

        <div className="currencies_img">
          <img
            className="w-[585px] h-auto mr-[20px] object-contain"
            src={currencies}
            alt="ZEN Currencies"
          />
        </div>
      </section>
    </div>
  );
};

export default Currencies;
