import react from 'react';
import { useState } from 'react';
import image from './assets/image.png';
import watch from './assets/watch.png';
import laptop from './assets/laptop.png';
import ptop from './assets/ptop.png';
import camera from './assets/camera.png';
import mobile from './assets/mobile.png';
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <>
            <div className="main flex flex-row justify-around items-center  p-4 bg-white w-[95%] ml-4 h-[100%] border-1 border-gray-300 rounded-lg shadow-lg mt-4">
                <div className='w-[15%] max-sm:hidden'>
                    <ul className='flex flex-col  justify-start  gap-4 whitespace-nowrap'>
                        <Link to="/weblistveiw">
                            <li className="bg-blue-500 hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ">
                                Automobiles
                            </li>
                        </Link>                    <li className=' hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ]'>Clothers and wear</li>
                        <li className=' hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ]'>Home interior</li>
                        <li className=' hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ]'>Computer Touch</li>
                        <li className=' hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ]'>tools, equipments</li>
                        <li className=' hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ]'>Sport and Outdoor</li>
                        <li className=' hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ]'>Animals and pets</li>
                        <li className=' hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ]'>Machinery tools</li>
                        <li className=' hover:bg-[#E5F1FF] cursor-pointer p-2 pl-4 pr-10 rounded-lg ]'>Other category</li>
                    </ul>
                </div>

                <div className='w-[70%] h-[100%] mr-6 '>
                    <img className='w-full h-full' src={image} alt="img" />
                </div>




                <div className='flex flex-col justify-center items-center gap-4 w-[15%] h-[100%] max-sm:hidden '>


                    <div className='bg-[#E3F0FF] p-4 rounded-lg '>
                        <h3>
                            <VscAccount className='size-15 text-white' /> Hi, user <br />let's getstated</h3>
                        <button className='bg-[#066FFF] cursor-pointer text-white  p-2 pl-16 pr-16 rounded-lg whitespace-nowrap '>join now</button>
                        <button className='bg-white cursor-pointer text-[#066fff]  p-2 pl-20 pr-16 rounded-lg mt-2 whitespace-nowrap'>log in</button>

                    </div>
                    <div className='bg-[#F38332] p-4 rounded-lg text-white w-[100%] '>
                        <h3>Get us $10 off <br /> with a new <br /> supplier</h3>
                    </div>
                    <div className='bg-[#55BDC3] p-4 rounded-lg text-white w-[100%] '>
                        <h3>Send quotes with  <br /> supplier <br />preferences</h3>
                    </div>
                </div>
            </div>


<div className='flex flex-wrap md:flex-nowrap w-[90%] rounded-2xl overflow-hidden m-4 mx-auto'>
  {[1, watch, laptop, ptop, camera, mobile].map((item, index) => (
    <div
      key={index}
      className='
        transition-[flex] duration-500 ease-in-out 
        flex-1 
        h-40 max-[400px]:h-32 md:h-full 
        cursor-pointer hover:flex-[3] 
        border-2 border-[#E0E0E0] 
        m-2 
        flex justify-center items-center
        bg-white
        max-[400px]:w-full
      '
    >
      {typeof item === 'number' ? (
        item
      ) : (
        <img
          src={item}
          alt=""
          className='w-full h-full object-contain'
        />
      )}
    </div>
  ))}
</div>

        </>

    );
}

export default Content;