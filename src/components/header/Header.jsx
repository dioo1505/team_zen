import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="w-full h-[55px] flex items-center justify-between px-[75px] py-[10px] border-b border-b-gray-500">
      <div className="header__left flex items-center gap-[30px]">
        <img src={logo} alt="" />
        <ul className="flex items-center gap-[22px]">
          <li>
            <a className="text-[#222222] text-[16px] nunito" href="/">
              Personal
            </a>
          </li>
          <li>
            <a className="text-[#222222] text-[16px] nunito" href="/">
              Bussiness
            </a>
          </li>
        </ul>
      </div>
      <div className="header__right flex items-center gap-[40px]">
        <ul className="flex items-center gap-[30px]">
          <li>
            <a className="text-[#222222] text-[16px] nunito" href="/">
              Zenefits
            </a>
          </li>
          <li>
            <a className="text-[#222222] text-[16px] nunito" href="/">
              Features
            </a>
          </li>
          <li>
            <a className="text-[#222222] text-[16px] nunito" href="/">
              Pricing
            </a>
          </li>
        </ul>
        <button className="text-[18px] text-[#222222] nunito border rounded-[48px] py-[8px] px-[32px]">Get app</button>
      </div>
    </header>
  );
};

export default Header;
