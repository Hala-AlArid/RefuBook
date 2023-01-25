import React from 'react';
// import Carousel from 'flowbite/src/components/carousel';
import Carousel from 'react-elastic-carousel';
import { MdStars } from 'react-icons/md';
// import logo from '../../../logo512.png';
import bg from "../../images/features.png"

const FEATURES = [
  {
    title: 'Reliability',
    description:
      'You can count on us for delivering the most reliable information possible. Our team filters all entered content to ensure the best user experience.',
  },
  {
    title: 'Motivation',
    description:
      'You have nothing to worry about. RefuBook will guide you through all the stages of grief when arriving to a new place as a refugee.',
  },
  {
    title: 'Efficiency',
    description:
      'Our users were able to get help to finish their paper work, find jobs, relocate safely and get answers for all of their questions.',
  },
  {
    title: 'Creativity',
    description:
      "Not only can you benefit from RefuBook's sources but also you can add to them! Help other RefuBook users using our blogging tools.",
  },
];
function Features() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <div className="bg-[#E5FAFF] p-16 flex md:flex-row flex-col justify-center items-center">
      {width <= breakpoint ? <MobileComponent /> : <DesktopComponent />}
      <img className='h-80 w-80 m-0' src={bg} alt="" />
    </div>
  );
}

export default Features;

function MobileComponent() {
  return (
      <div className="h-auto mb-16 sm:w-[44%]">
        <Carousel showArrows={false} enableAutoPlay>
          {FEATURES.map((feature) => {
            return (
              <div className=" sm:pt-[80px] pt-[50px] h-full items-center  ">
                <header className="flex flex-col xl:gap-x-2 justify-center items-center text-center ">
                  <MdStars className="text-5xl text-gray-500" />
                  <h1 className="text-gray-500">{feature.title}</h1>
                </header>
                <p className=" text-center w-full">{feature.description}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
  );
}

function DesktopComponent() {
  return (
      <div className="grid grid-cols-2 2xl:pt-14 grid-rows-2 sm:w-[44%]">
        {FEATURES.map((feature) => {
          return (
            <div className="h-auto items-center w-[75%]">
              <header className="flex xl:gap-x-2 justify-start  text-center mt-7 sm:pt-2 ">
                <MdStars className="mt-[2px] text-2xl text-zinc-500" />
                <h3 className="font-bold">{feature.title}</h3>
              </header>
              <p className=" text-start text-[12px] w-[100%] pt-1 ">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
  );
}