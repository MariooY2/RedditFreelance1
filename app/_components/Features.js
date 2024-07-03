import React from 'react';

// Data for the features
const features = [
  {
    title: "Schedule",
    icon: "/schedule.png", // Replace with your actual icon path
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: "Organize",
    icon: "/book.svg", // Replace with your actual icon path
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: "Manage",
    icon: "/manage.svg", // Replace with your actual icon path
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

function Feature({ icon, title, description }) {
    return (
      <div className="flex flex-col items-start p-7 shadow-md pb-10 bg-white w-96">
        <div className='w-full mb-2 flex justify-start items-center'>
          <img src={icon} alt={title} className="h-20 w-20" />
        </div>
        <div className='w-full'>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <div className='w-full'>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

function FeaturesList() {
  return (
    <>
      <h1 className='mt-52 flex justify-center items-center text-4xl mb-20'> Our Features</h1>
      <div className="flex flex-wrap justify-around gap-3 w-full">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </>
  );
}

export default FeaturesList;
