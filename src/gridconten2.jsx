import React from "react";
import { useState } from "react";
import i1 from './assets/i1.png';
import watch from './assets/watch.png';
import camera from './assets/camera.png';
import headphone from './assets/headphone.png';
import jug from './assets/jug.png';
import laptop from './assets/laptop.png';
import ptop from './assets/ptop.png';
import smartphone from './assets/smartphone.png';
import mobile from './assets/mobile.png';
import baak from './assets/baak.png';



const GridConten2 = () => {
    return (
        <>
            <div className="  grid grid-cols-5 gap-4 p-4 bg-white w-[95%] ml-10 h-[100%] border-1 border-gray-300 rounded-lg shadow-lg mt-4 max-sm:grid-cols-2 max-sm:grid-rows-5 max-sm:gap-2 max-sm:ml-2">
                <div className="gap-4 p-4 border-2 border-black row-span-2 max-sm:col-span-2 w-full  bg-cover bg-center"
                    style={{ backgroundImage: `url(${i1})` }}
                >
                    <h1 className="ml-4 mt-10 text-2xl font-bold">Consumer <br />Electronics and <br />gadgets</h1>
                    <button className=" ml-4 mt-3 p-3 bg-[#FFFFFF] rounded-md">Source now </button>
                </div>
                <div className="gap-4 p-4 border-2 border-black h-[180px] flex   ">
                    <div className="ml-4 mt-2 w-[50%]">
                        <h1 className="text-lg font-bold ">Sofa Chair</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 19</p>
                    </div>
                    <div className="  w-[50%] mt-10  ">
                        <img src={watch} alt="img" />
                    </div>

                </div>
                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">
                    <div className="ml-4 w-[50%]">
                        <h1 className="text-lg font-bold mt-2">Camera</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 89</p>
                    </div>
                    <div className="mt-10 w-[50%]  ">
                        <img src={camera} alt="img" />
                    </div>
                </div>
                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">Headphone</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 10</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={headphone} alt="img" />
                    </div>


                </div>




                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">Electric Kattel</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 90</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={jug} alt="img" />
                    </div>


                </div>




                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">Gaming Set</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 35</p>
                    </div>
                    <div className=" mt-10 w-[50%]  ">
                        <img src={laptop} alt="img" />
                    </div>


                </div>





                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">Laptop & PC</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 340</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={ptop} alt="img" />
                    </div>


                </div>


                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">Smart Phone</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 19</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={smartphone} alt="img" />
                    </div>


                </div>

                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">SamSung Js10</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 110</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={mobile} alt="img" />
                    </div>


                </div>
            </div>



            <div className=" relative w-[95%] h-[500px]  m-4 ml-10 bg-cover bg-center flex max-sm:flex-col max-sm:h-full max-sm:ml-4" style={{ backgroundImage: `url(${baak})` }}>



                <div className="relative z-10 text-white m-16 w-[50%]">
                    <h1 className="text-3xl font-bold">
                        An easy way to send <br /> requests to all suppliers
                    </h1>
                    <p className="mt-2 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt.
                    </p>
                </div>



              <div className="max-w-md mx-auto mt-4 p-6 mb-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-10">Send quote to suppliers</h2>

      <input
        type="text"
        placeholder="What item you need?"
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
      />

      <textarea
        rows="4"
        placeholder="Type more details"
        className="w-full p-3 border border-gray-300 rounded-md mb-4 resize-none focus:outline-none"
      ></textarea>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Quantity"
          className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none"
        />
        <select className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none">
          <option>Pcs</option>
          <option>Kg</option>
          <option>Box</option>
        </select>
      </div>

      <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition cursor-pointer">
        Send inquiry
      </button>
    </div>



                <div className="absolute inset-0 bg-opa bg-gradient-to-r from-blue-600/80 to-transparent max-sm:bg-gradient-to-b max-sm:from-blue-600/80 "> </div>




            </div> 




        </>
    )

}
export default GridConten2;