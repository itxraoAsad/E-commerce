 import react from 'react';
import { useState}  from 'react';
import { CiSearch } from "react-icons/ci";


const Nav = () => {
    return(
        <>
         
        <nav className='h-[60px] w-[100%] text-black flex flex-row justify-between items-center px-20 border-2 border-[#E7E7E7] bg-white'>
            
            <div className='navb max-sm:hidden'>
                <ul className='flex flex-row justify-between items-center gap-4'>
                    
                    <li>All category</li>
                    <li>Hot Offers</li>
                    <li>Gift Boxes</li>
                    <li>Projects</li>
                    <li>Menu item</li>
                    <li>Help </li>
                </ul>
            </div>
            <div className='min-sm:hidden border-2 border-[#E7E7E7] rounded-lg px-4  py-1 text-2xl bg-[#F7FAFC] w-[100%] flex flex-row justify-between items-center gap-2'>
                 <  input type="search" name="search" id=""     placeholder='Search...'/>

        </div>
            <div className='max-sm:hidden'>
                <ul className='flex flex-row justify-between items-center gap-4'>
                    <li>English, USD</li>
                    <li>Ship to</li>
                </ul>
            </div>
        </nav>
       


        </>
    );

}
export default Nav;