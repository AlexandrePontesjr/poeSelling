import { logo } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <div className={`flex justify-center items-center w-full flex-col py-8 relative text-center`}>
    <img
      src={logo}
      alt="ReamXcoins"
      className="w-[266px] h-[72.14px] object-contain"
    />
    <div className="w-full items-center justify-center py-3">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ">
        Copyright &copy; 2024 SkinD. All Rights Reserved.
      </p>
      {footerLinks.map((footerlink) => (
        <div key={footerlink.title} className={`lg:gap-16 flex ss:my-0 my-4 min-w-[150px] justify-center py-8 ${'lg:flex-row flex-col'}`}>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white hover:text-secondary mb-2">
            RealmXcoins
          </h4>
          {footerlink.links.map((link, index) => (
            <div
              className={`lg:flex font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                }`}
              key={link.name}
              onClick={() => window.open(link.link)}
            >
              {link.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Footer;