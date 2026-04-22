import logo from "../../assets/Group (4).png"
import logo2 from "../../assets/Group (5).png"
const Footer = () => {
  return (
    <footer className='conainer'>
      <hr />
        <div className=' flex justify-between mt-[60px]'>
          <ul>
            <li className='text-[#222222] text-[16px] font-[400] mb-[15px]'>Learn</li>
             <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Help center</li>
              <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Join ZEN team</li>
              <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Privacy Policy</li>
              <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Cookies</li>
              <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Terms of use</li>
          </ul>

          <ul>
            <li className='text-[#222222] text-[16px] font-[400] mb-[15px]'>Discover</li>
             <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>For developers</li>
              <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Apple Pay</li>
              <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Google Pay</li>
          </ul>

          <ul>
            <li className='text-[#222222] text-[16px] font-[400] mb-[15px]'>Offer</li>
             <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Business</li>
              <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Personal</li>
          </ul>

          <ul>
            <li className='text-[#222222] text-[16px] font-[400] mb-[15px]'>Language</li>
             <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>English</li>
              <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>Polish</li>
          </ul>

          <ul>
            <li className='text-[#222222] text-[16px] font-[400] mb-[15px]'>Follow us</li>
          </ul>

          <ul>
            <li className='text-[#222222] text-[16px] font-[400] mb-[15px]'>Contact</li>
             <li className='text-[#222222] text-[16px] font-[400] mt-[15px]'>hello@zen.com</li>
              
          </ul>
        </div>

        <div className='flex items-center justify-between mt-[50px] mb-[40px]'>
          <div>
            <img src={logo} alt="image" />

            <p className="mt-[25px] text-[#AAAAAA] text-[12px] from-[400] w-[836px]">ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries. Registration number of the company 304749651, VAT ID LT100011714916. License of electronic money institutions number LB000457. Share capital 2.185.000,00 EUR. Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.</p>
          </div>

          <img src={logo2} alt="image" />
        </div>
    </footer>
  )
}

export default Footer
