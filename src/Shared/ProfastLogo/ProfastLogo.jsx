import React from 'react';
import logo from "../../assets/logo.png"

const ProfastLogo = () => {
  return (
    <div className='flex items-end'>
      <img className='mb-2' src={logo} alt="" />
      <p className='text-2xl font-bold -ml-3'>ProFast</p>
    </div>
  );
};

export default ProfastLogo;