import React, { useState } from 'react';
import Llider from './llider';
import StarRating from './starrating'
import ItemSection from './itemsection';
import camera from './assets/camera.png';
import mobile from './assets/mobile.png';
import smartphone from './assets/smartphone.png';
import myphone from './assets/myphone.png';
import ptop from './assets/ptop.png';
import watch from './assets/watch.png';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const listpage = () => {
    


    return (
       <>
            <Header />
       
       
        <div className="flex w-[97%] ml-10  h-full max-sm:ml-3">


            <div className=" w-[20%] flex flex-col items-start justify-center  gap-4 pt-4 pl-4 pr-4 max-sm:hidden">
                <div className='border-t-1 w-full pb-4'>
                    <Link to="">

                        <h1 className="text-2xl font-bold mt-4 cursor-pointer  " >Category</h1>


                    </Link>

                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap">Electronics</h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">SmartPhones</h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">Modren tech</h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap text-[#3585FA]">See all</h1>


                </div>


                <div className='border-t-1 w-full pb-4'>

                    <h1 className="text-2xl font-bold mt-4 cursor-pointer">Brands</h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">
                        <input type="checkbox" name="" id="Samsumg" className='mr-2' /> Samsumg
                    </h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">
                        <input type="checkbox" name="" id="Samsumg " className='mr-2' />
                        Apple</h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">
                        <input type="checkbox" name="" id="Samsumg" className='mr-2' /> Huawei

                    </h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">

                        <input type="checkbox" name="" id="Samsumg" className='mr-2' /> Pocco
                    </h1>

                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">

                        <input type="checkbox" name="" id="Samsumg" className='mr-2' /> Lenovo
                    </h1>

                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap text-[#3585FA]">See all</h1>



                </div>



                <div className='border-t-1 w-full pb-4'>

                    <h1 className="text-2xl font-bold mt-4 cursor-pointer ">Features</h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">
                        <input type="checkbox" name="" id="Samsumg" className='mr-2 ' /> Metalic
                    </h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">
                        <input type="checkbox" name="" id="Samsumg " className='mr-2' />
                        Plastic cover</h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">
                        <input type="checkbox" name="" id="Samsumg" className='mr-2' /> 8GB RAM

                    </h1>
                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">

                        <input type="checkbox" name="" id="Samsumg" className='mr-2' /> Super Power
                    </h1>

                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap ">

                        <input type="checkbox" name="" id="Samsumg" className='mr-2' /> Large Memory
                    </h1>

                    <h1 className="mt-4 w-0 cursor-pointer text-nowrap text-[#3585FA]">See all</h1>



                </div>

               



                <div>

                    <h1 className="text-2xl font-bold mt-4 cursor-pointer ">Condition</h1>

                    <label className="flex items-center space-x-2 cursor-pointer mt-4">
                        <input
                            type="checkbox"
                            className="w-5 h-5  appearance-none border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-transparent transition duration-200  " />
                        <span className="text-sm ml-2">any</span>
                    </label>


                    <label className="flex items-center space-x-2 cursor-pointer mt-4">
                        <input
                            type="checkbox"
                            className="w-5 h-5  appearance-none border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-transparent transition duration-200  " />
                        <span className="text-sm ml-2">Refurbished</span>
                    </label>



                    <label className="flex items-center space-x-2 cursor-pointer mt-4">
                        <input
                            type="checkbox"
                            className="w-5 h-5  appearance-none border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-transparent transition duration-200  " />
                        <span className="text-sm ml-2">Brand ne</span>
                    </label>




                    <label className="flex items-center space-x-2 cursor-pointer mt-4">
                        <input
                            type="checkbox"
                            className="w-5 h-5  appearance-none border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:border-transparent transition duration-200  " />
                        <span className="text-sm ml-2">Old items</span>
                    </label>

                </div>
                
            </div>


            <div className=" w-[100%]  ">
                <ItemSection />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
  {[camera, mobile, smartphone, myphone, ptop, watch].map((imgSrc, index) => (
    <div key={index} className="bg-white border border-[#99a3b0] rounded-lg p-4 flex flex-col">
      <div className="w-full flex justify-center mb-4">
        <img src={imgSrc} alt="product" className="w-[150px] h-auto object-contain" />
      </div>

      <h1 className="text-base font-medium">Canon Camera EOS 2000, Black 10x Zoom</h1>

      <p className="font-bold mt-4 text-lg">
        $998.0 <span className="text-gray-500 line-through text-sm ml-2">$1128.00</span>
      </p>

      <div className="flex flex-wrap items-center text-sm mt-2 gap-2">
        <StarRating />
        <span className="text-[#FF9017] flex items-center gap-1">
          7.5
          <span className="inline-block w-[7px] h-[7px] rounded-full border-2 border-[#DEE2E7] bg-[#DEE2E7]"></span>
        </span>
        <p className="text-[#8B96A5]">154 Orders</p>
        <span className="inline-block w-[7px] h-[7px] rounded-full border-2 border-[#DEE2E7] bg-[#DEE2E7]"></span>
        <p className="text-[#00B517]">Free Shipping</p>
      </div>

      <p className="text-[#505050] mt-4 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque reprehenderit excepturi doloribus fuga inventore autem? Recusandae nemo, quis blanditiis facilis.
      </p>

      <p className="mt-4 text-[#0D6EFD] cursor-pointer text-sm">View details</p>
    </div>
  ))}
</div>

            </div>

        </div>
        <Footer/>

    </>

    );
};



export default listpage;
