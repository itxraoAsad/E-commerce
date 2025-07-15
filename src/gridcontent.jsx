import React from "react";
import { useState } from "react";
import gimg from './assets/gimg.png';
import sofa from './assets/sofa.png';
import lamp from './assets/lamp.png';
import kitchen from './assets/kitchen.png';
import glass from './assets/glass.png';
import mixer from './assets/mixer.png';
import blender from './assets/blender.png';
import applience from './assets/applience.png';
import plant from './assets/plant.png';





const GridContent = () => {
    return (
        <>
            <div className="  grid grid-cols-5 gap-4 p-4 bg-white w-[95%] ml-10 h-[100%] border-1 border-gray-300 rounded-lg shadow-lg mt-4 max-sm:grid-cols-2 max-sm:grid-rows-5 max-sm:gap-2 max-sm:ml-2">
                <div className="gap-4 p-4 border-2 border-black row-span-2 max-sm:col-span-2 w-full  bg-cover bg-center "
                    style={{ backgroundImage: `url(${gimg})` }}
                >
                    <h1 className="ml-4 mt-10 text-2xl font-bold">Home and <br />outdoor</h1>
                    <button className=" ml-4 mt-3 p-3 bg-[#FFFFFF] rounded-md">Source now </button>
                </div>
                <div className="gap-4 p-4 border-2 border-black h-[180px] flex   ">
                    <div className="ml-4 mt-2 w-[50%]">
                        <h1 className="text-lg font-bold ">Sofa Chair</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 19</p>
                    </div>
                    <div className="  w-[50%] mt-10  ">
                        <img src={sofa} alt="img" />
                    </div>

                </div>
                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">
                    <div className="ml-4 w-[50%]">
                        <h1 className="text-lg font-bold mt-2">Lamp</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 19</p>
                    </div>
                    <div className="mt-10 w-[50%]  ">
                        <img src={lamp} alt="img" />
                    </div>
                </div>
                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">kitchen</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 19</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={kitchen} alt="img" />
                    </div>


                </div>




                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">Smart watches</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 19</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={glass} alt="img" />
                    </div>


                </div>




                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">kitchen mixer</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 100</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={mixer} alt="img" />
                    </div>


                </div>





                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">kitchen Blender</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 39</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={blender} alt="img" />
                    </div>


                </div>


                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">Home Applience</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 19</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={applience} alt="img" />
                    </div>


                </div>

                <div className="gap-4 p-4 border-2 border-black flex h-[180px]">


                    <div className="ml-4 mt-2 w-[50%] ">
                        <h1 className="text-lg font-bold ">Home Applience</h1>
                        <p className="text-[#99A3B0]"> From <br /> USD 10</p>
                    </div>
                    <div className=" mt-14 w-[50%]  ">
                        <img src={plant} alt="img" />
                    </div>


                </div>        </div>

        </>
    )

}
export default GridContent;