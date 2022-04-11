import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Je suis situé à </span>Montréal Qc,
        Canada
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Envoyez-moi un courriel</span>{" "}
        <a href="mailto:steve@mail.com">rolly.mayola@hotmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Appellez-moi</span>{" "}
        <a href="Tel: +216 21 184 010">+1-438-828-1442</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
