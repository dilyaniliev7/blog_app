import { Switch } from "@/components/ui/switch";
import { FaHamburger } from "react-icons/fa";
import ResponsiveNavBar from "./ResponsiveNavBar"
import { useState } from 'react';

const NavBar = () => {

    const [showNavBar, setShowNavBar] = useState(false)

  return (
      <>
        <nav className="max-container padding-x py-6 flex justify-between items-center gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]">
        <a to="/" className="text-[#141624] text-2xl font-bold dark:text-[#FFFFFF]">
            DevFolio
        </a>

        <ul className="flex items-center justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
            <li>Hi, Dilyan</li>
            <li>Logout</li>
            <li>Login</li>
            <li>Register</li>
            <li className="font-semibold cursor-pointer">Create post</li>
        </ul>

        <div className="flex items-center gap-4">
            <Switch />
            <FaHamburger className="text-2xl cursor-pointer hidden max-md:block dark:text-white" onClick={() => setShowNavBar(curr => !curr)}/>
        </div>
        </nav>
        {showNavBar && <ResponsiveNavBar />}
      </>
  )
};

export default NavBar;