import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <aside>
        <p className="text-[#074460] text-[12px]">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <a
            className="text-[#ffa310] text-base font-semibold"
            href="https://my-portfolio-f17dc.web.app/"
          >
            Abdur Razzak
          </a>
        </p>
      </aside>
    </div>
  );
};

export default Footer;
