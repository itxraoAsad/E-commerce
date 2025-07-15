import React from "react"
import { FaShoppingBag } from "react-icons/fa"
import { MdOutlineMessage } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { GiRoyalLove } from "react-icons/gi"
import { IoMdCart } from "react-icons/io"
import { IoHomeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full bg-white border border-[#E7E7E7] py-4 px-4">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-2 justify-center">
          <FaShoppingBag className="text-2xl" />
          <h1 className="text-2xl font-bold text-blue-400">Brand</h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 justify-center">
          <input
            placeholder="Search"
            className="border border-blue-600 px-2 py-1 rounded w-full sm:w-auto"
          />
          <select className="border border-blue-600 px-2 py-1 rounded text-sm">
            <option>All Category</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">
            Search
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm mt-2 md:mt-0">
          <Link to="/ProfilePage" className="flex items-center gap-1 text-blue-500">
            <CgProfile size={20} />
            <h3>Profile</h3>
          </Link>

          <div className="flex items-center gap-1">
            <MdOutlineMessage size={20} />
            <h3>Message</h3>
          </div>

          <Link to="/listpage" className="flex items-center gap-1 text-blue-500">
            <GiRoyalLove size={20} />
            <h3>ListPage</h3>
          </Link>

          <div className="flex items-center gap-1">
            <IoMdCart size={20} />
            <h3>MyCart</h3>
          </div>

          <Link to="/" className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded">
            <IoHomeOutline size={20} />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
