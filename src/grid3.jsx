import react from 'react';
import shirt1 from './assets/shirt1.png'
import shirt2 from './assets/shirt2.png'
import shirt3 from './assets/shirt3.png'
import shirt4 from './assets/shirt4.png'
import shirt5 from './assets/shirt5.png'
import shirt6 from './assets/shirt6.png'
import shirt7 from './assets/shirt7.png'
import watch from './assets/watch.png'
import glass from './assets/glass.png'
import jug from './assets/jug.png'


const Grid3 = () =>{
    return(<>

    <div className='w-[100%]  my-4'>
        <h1 className='pl-10 pt-2 text-3xl'>Recomended items</h1>

        <div className='grid grid-cols-5 gap-4 pl-10 pt-4 max-sm:grid-cols-2 max-sm:gap-2 max-sm:pl-2'>     
            <div className=' rounded-md shadow-md border-2 border-[#E3E3E4] hover:border-amber-300 cursor-pointer '>
                <img src={shirt1} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$10.30</h1>
                    <h1 className='text-[#99a3b0] text-xl'>T-shirts with multiple </h1>
                    <p className='text-[#99A3B0] text-xl'>colors, for men</p>
                </div>
            </div>



            <div className=' rounded-md shadow-md border-2 border-[#E3E3E4]  hover:border-amber-300 cursor-pointer '>
                <img src={shirt2} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$10.30</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Brown Coat</h1>
                    <p className='text-[#99A3B0] text-xl'> for men</p>
                </div>
            </div>



           <div className=' rounded-md shadow-md border-2 border-[#E3E3E4]  hover:border-amber-300 cursor-pointer'>
                <img src={shirt3} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$12.30</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Dress Coat </h1>
                    <p className='text-[#99A3B0] text-xl'>colors, for men</p>
                </div>
            </div>


             <div className=' rounded-md shadow-md border-2 border-[#E3E3E4]  hover:border-amber-300 cursor-pointer'>
                <img src={shirt4} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$12.30</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Purse </h1>
                    <p className='text-[#99A3B0] text-xl'>for men</p>
                </div>
            </div>
            

             <div className=' rounded-md shadow-md border-2 border-[#E3E3E4]  hover:border-amber-300 cursor-pointer'>
                <img src={shirt5} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$12.30</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Jeans Bags </h1>
                    <p className='text-[#99A3B0] text-xl'> for men</p>
                </div>
            </div>
            



            <div className=' rounded-md shadow-md border-2 border-[#E3E3E4]  hover:border-amber-300 cursor-pointer'>
                <img src={shirt6} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$9.99</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Jeans pent </h1>
                    <p className='text-[#99A3B0] text-xl'> for men</p>
                </div>
            </div>
            


            
            <div className=' rounded-md shadow-md border-2 border-[#E3E3E4]  hover:border-amber-300 cursor-pointer'>
                <img src={shirt7} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$8.99</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Jeans pent </h1>
                    <p className='text-[#99A3B0] text-xl'> for men</p>
                </div>
            </div>
            


             <div className=' rounded-md shadow-md border-2 border-[#E3E3E4]  hover:border-amber-300 cursor-pointer'>
                <img src={watch} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$10.33</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Smart Watch </h1>
                    <p className='text-[#99A3B0] text-xl'> for men</p>
                </div>
            </div>


            <div className=' rounded-md shadow-md border-2 border-[#E3E3E4] hover:border-amber-300 cursor-pointer '>
                <img src={glass} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$10.30</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Home price </h1>
                    <p className='text-[#99A3B0] text-xl'> for design</p>
                </div>
            </div>

            <div className=' rounded-md shadow-md border-2 border-[#E3E3E4] hover:border-amber-300 cursor-pointer '>
                <img src={jug} alt="shirt" className='w-full h-[200px] object-cover rounded-t-md mt-4' />
                <div className='p-2 ml-2'>
                    <h1 className='font-bold text-lg'>$10.33</h1>
                    <h1 className='text-[#99a3b0] text-xl'>Electric Kattel</h1>
                    <p className='text-[#99A3B0] text-xl'> Hot water</p>
                </div>
            </div>
        </div>

    </div>
    </>)
}
export default Grid3