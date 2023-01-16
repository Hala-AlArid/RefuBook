import React from 'react';
import Carousel from 'react-elastic-carousel';
import NavBar from '../../components/NavBar/NavBar';
import avatar from '../../images/60111.jpg';
import blogimage from '../../images/blog123.jpg';
import './Blog.css';

function Blog() {
  const paragraphLength =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitimolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo aute';

  return (
    <div className="md:grid md:place-items-center">
      <NavBar />
      <div className="m-5 md:w-2/3 mt-24">
        <div className="hidden md:flex md:justify-end">
          <div className="mx-1">Sort by:</div>
          <select className="mx-1">
            <option>DATE</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full px-3"
          />
        </div>
        <hr className="hidden md:block md:h-1 md:bg-gray-300 md:m-1 md:rounded-full" />
        <div className="text-[#4F4F4F] font-bold text-lg">Popular:</div>
        {/* blog card */}
        <Carousel
          showArrows={false}
          itemsToShow={2}
          outerSpacing={0}
          itemPadding={[0, 3]}
          className=" md:p-0 md:itemsToShow={3}"
        >
          <div className=" shadow-xl w-full h-full md:w-1/2 md:h-96">
            <img
              src={blogimage}
              alt="blogimage"
              className="bg-[#ECF1F8] h-2/3 w-full "
            />
            <div className="text-black font-bold text-lg ml-3 my-2">Title</div>
            <div className="text-black ml-3 text-base font-semibold ">
              {paragraphLength.substring(0, 25)}...
            </div>
            <div className="flex ml-3 my-3 ">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
                user name
              </div>
            </div>
          </div>
          <div className=" shadow-xl w-full h-full md:w-1/2 md:h-96">
            <img
              src={blogimage}
              alt="blogimage"
              className="bg-[#ECF1F8] h-2/3 w-full "
            />
            <div className="text-black font-bold text-lg ml-3 my-2">Title</div>
            <div className="text-black ml-3 text-base font-semibold ">
              {paragraphLength.substring(0, 25)}...
            </div>
            <div className="flex ml-3 my-3 ">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
                user name
              </div>
            </div>
          </div>
          <div className=" shadow-xl w-full h-full md:w-1/2 md:h-96">
            <img
              src={blogimage}
              alt="blogimage"
              className="bg-[#ECF1F8] h-2/3 w-full "
            />
            <div className="text-black font-bold text-lg ml-3 my-2">Title</div>
            <div className="text-black ml-3 text-base font-semibold ">
              {paragraphLength.substring(0, 25)}...
            </div>
            <div className="flex ml-3 my-3 ">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
                user name
              </div>
            </div>
          </div>
        </Carousel>
        <div className="m-5 grid grid-cols-2 gap-3 md:flex md:justify-center ">
          <div className=" shadow-xl w-full h-full md:h-96 md:w-52 ">
            <img
              src={blogimage}
              alt="blogimage"
              className="bg-[#ECF1F8] h-1/2 w-full md:h-1/2 "
            />
            <div className="text-black font-bold text-lg ml-3 my-2 ">Title</div>
            <div className="text-black ml-3 text-base font-semibold   ">
              {paragraphLength.substring(0, 25)}...
            </div>
            <div className="flex ml-3 my-3  ">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
                user name
              </div>
            </div>
          </div>{' '}
          <div className=" shadow-xl w-full h-full md:h-96 md:w-52">
            <img
              src={blogimage}
              alt="blogimage"
              className="bg-[#ECF1F8] h-1/2 w-full md:h-1/2 "
            />
            <div className="text-black font-bold text-lg ml-3 my-2">Title</div>
            <div className="text-black ml-3 text-base font-semibold ">
              {paragraphLength.substring(0, 25)}...
            </div>
            <div className="flex ml-3 my-3 ">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
                user name
              </div>
            </div>
          </div>{' '}
          <div className=" shadow-xl w-full h-full md:h-96 md:w-52">
            <img
              src={blogimage}
              alt="blogimage"
              className="bg-[#ECF1F8] h-1/2 w-full md:h-1/2 "
            />
            <div className="text-black font-bold text-lg ml-3 my-2">Title</div>
            <div className="text-black ml-3 text-base font-semibold ">
              {paragraphLength.substring(0, 25)}...
            </div>
            <div className="flex ml-3 my-3 ">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
                user name
              </div>
            </div>
          </div>{' '}
          <div className=" shadow-xl w-full h-full md:h-96 md:w-52">
            <img
              src={blogimage}
              alt="blogimage"
              className="bg-[#ECF1F8] h-1/2 w-full  md:h-1/2"
            />
            <div className="text-black font-bold text-lg ml-3 my-2">Title</div>
            <div className="text-black ml-3 text-base font-semibold ">
              {paragraphLength.substring(0, 25)}...
            </div>
            <div className="flex ml-3 my-3 ">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 mt-1 text-[#006EFF] text-base font-semibold ">
                user name
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
