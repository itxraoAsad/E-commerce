import React from 'react';
import { MdWindow } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const ItemSection = () => {
    return (
        <div className='w-full bg-white h-auto md:h-[60px] border border-[#99a3b0] rounded-sm flex flex-col md:flex-row items-center justify-between p-4 gap-4 '>
            
           
            <div>
                <p className='text-sm md:text-base text-center md:text-left'>
                    12,911 items in <span className='font-bold'>Mobile accessory</span>
                </p>
            </div>

         
            <div className='flex items-center'>
                <input type="checkbox" id="Samsumg" className='mr-2' />
                <label htmlFor="Samsumg" className='text-sm'>Verified only</label>
            </div>

        
            <div>
                <button className='px-4 py-1 border rounded-lg cursor-pointer text-sm'>
                    Featured
                </button>
            </div>

          
            <div className='flex items-center gap-2'>
                <MdWindow className='text-2xl cursor-pointer' />
                <RxHamburgerMenu className='text-2xl cursor-pointer' />
            </div>

        </div>
    );
};

export default ItemSection;
