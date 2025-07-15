import React from "react"
import { FaShoppingBag } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Footer=()=>{
    return(
        <>
       <div className="bg-white flex  justify-center items-center  flex-wrap space-x-20 py-10">
         <div className="space-y-3 mt-2 ">
              <div className=" flex  items-center space-x-2">
                            <FaShoppingBag className= "text-2xl "/>
                            <h1 className="text-2xl font-bold text-blue-400">Brand</h1>
                          </div>
                          <h3 className="w-4/5 opacity-70">Best Information about the company gies here but now lorem ipsum is</h3>
                          <div className="flex space-x-3">
                         {/* <FaFacebook className="bg-gray-300"/> */}
                         <FaFacebook className="bg-gray-400 text-white p-1.5 text-3xl rounded-2xl"/>

                           <CiTwitter className="bg-gray-400 text-white p-1.5 text-3xl rounded-2xl" />
                            <FaLinkedin className="bg-gray-400 text-white p-1.5 text-3xl rounded-2xl"/>
                            <FaInstagram className="bg-gray-400 text-white p-1.5 text-3xl rounded-2xl"/>
                            <FaYoutube className="bg-gray-400 text-white p-1.5 text-3xl rounded-2xl"/>
                          </div>
            </div> 

            <ul className="space-y-1 opacity-70 mt-2">
              <h1 className="font-bold mb-3">About</h1>
              <li>About us</li>
              <li>Find Store</li>
              <li>categories</li>
              <li>Blogs</li>
              
            </ul>      

               <ul className="space-y-1 opacity-70 mt-2">
              <h1 className="font-bold mb-3">partenarship</h1>
              <li>About us</li>
              <li>Find Store</li>
              <li>categories</li>
              <li>Blogs</li>
              
            </ul>    

              <ul className="space-y-1 opacity-70 mt-2">
              <h1 className="font-bold mb-3">Information</h1>
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>shiping</li>
              <li>contact Us</li>
              
            </ul> 

              <ul className="space-y-1 opacity-70 mt-2">
              <h1 className="font-bold mb-3">For Users</h1>
              <li>Login</li>
              <li>Register</li>
              <li>Setting</li>
              <li>My Orders</li>
              
            </ul>    

            <div className="mt-2">
              <h1 className="font-bold mb-4 opacity-70">Get App</h1>
               <div className="flex items-center bg-black text-white rounded-md mb-2">
                <IoLogoApple className="text-white text-3xl"/>
                <div className="flex flex-col">
                  <h1>Download on the</h1>
                <h1 className="font-extrabold">APP store</h1>
                </div>
                
               </div>
              <div className="flex bg-black items-center text-white rounded-md ">
                 <IoLogoGooglePlaystore className="text-white text-3xl"/>
               <div className="flex flex-col">
                 <h1>Get iT on</h1>
                <h1 className="font-extrabold">PLAY STORE</h1>
               </div>
              </div>
            </div>   

       </div>
        </>
    )
}
export default Footer;
