import React from 'react';

const ServiceCard = ({service}) => {
 const {icon:Icon, title, description} = service
  return (
   <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg hover:bg-[#CAEB66] transition duration-300 flex flex-col items-start gap-4">
      <div className="p-3 bg-blue-100 mx-auto text-blue-600 rounded-xl text-3xl">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold  mx-auto text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;