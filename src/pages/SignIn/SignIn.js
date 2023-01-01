import React from 'react';
import { NavLink } from 'react-router-dom';

function SignIn() {
  return (
    <div className="bg-[#70CDD6] h-screen p-6">
      <div className="z-10 bg-white p-5 grid relative shadow-2xl shadow-gray-500 rounded-3xl  h-full overflow-hidden  ">
        <div className="ml-4 z-20 flex space-x-24 md:flex md:justify-between md:mx-10 md:mt-8 ">
          <div className="text-[#4699C2] ">
            <div className="hidden md:block font-['Roboto'] font-bold text-2xl">
              Refubook
            </div>
            <i className="fa-solid fa-bars md:hidden"> </i>
          </div>
          <ul className="hidden md:flex md:space-x-16 md:text-xl  ">
            <li className="font-['Roboto'] text-[#4699C2] font-semibold">
              Home
            </li>
            <li className="font-['Roboto'] text-[#4699C2] font-semibold">
              About us
            </li>
            <li className="font-['Roboto'] text-[#4699C2] font-semibold ">
              Contact
            </li>
            <div>
              <li className="text-white bg-[#4699C2] px-4  font-semibold  rounded-3xl ">
                Sign in
              </li>
            </div>
          </ul>
          <div className="text-[#4699C2] md:hidden font-semibold font-['Roboto']">
            Sign in
          </div>
        </div>
        <div className="z-20 bg-white p-5 rounded-3xl shadow-2xl shadow-gray-500 grid place-content-center md:w-1/2 md:justify-self-center md:flex md:relative md:h-72">
          <div className="place-self-center text-[#4699C2] font-bold font-['Roboto'] md:absolute md:top-6 md:text-xl">
            SIGN IN WITH
          </div>

          <div className="place-self-center bg-[#EB5757] text-2xl text-white px-14 py-2 rounded-3xl m-5">
            <i className="fa-brands fa-google"> </i>
          </div>
          <div className="place-self-center font-['Roboto'] text-[#4699C2] font-semibold m-1 ">
            OR
          </div>
          <div className="place-self-center bg-[#2F80ED] text-white px-14 py-2 rounded-3xl m-5">
            <i className="fa-brands fa-facebook-f  text-2xl"> </i>
          </div>
          <div className="hidden md:absolute md:bottom-4 md:flex md:text-xl md:space-x-1 md:font-medium">
            <div className="text-[#70CDD6]  font-extrabold font-['Roboto']  text-lg">
              Want to be a member?
            </div>
            <div className="text-[#4699C2] "><NavLink to="/signup"><span className='cursor-pointer'>Sign in</span></NavLink></div>
          </div>
        </div>
        <div className="grid mt-6 z-10 md:hidden">
          <div className="text-[#70CDD6] place-self-center font-extrabold font-['Roboto'] text-lg">
            Want to be a member?
          </div>
          <div className="text-white bg-[#4699C2] place-self-center px-5 py-1 rounded-3xl font-medium">
            Sign up
          </div>
        </div>
        <div className="bg-[#E5FAFF] -z-10 rotate-45 h-96 w-96 absolute -bottom-24 -left-4 md:rounded-full md:h-screen md:w-screen md:rotate-0 md:-left-2/4  md:-top-4 ">
          {' '}
        </div>
      </div>
    </div>
  );
}

export default SignIn;