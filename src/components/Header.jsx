import React, { useState} from 'react';
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
import { MdHorizontalSplit } from "react-icons/md";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const displayMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        {/* Desktop */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <motion.div    
                animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} 
                className="flex items-center gap-2 cursor-pointer">
                <img src={Logo} className="w-20 object-cover" alt="logo" />
            </motion.div>

            <div className="flex items-center gap-8">
                <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex items-center gap-24 "
                >
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        About Us
                    </li>

                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Services
                    </li>

                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Get Social
                    </li>
                </motion.ul>
            </div>
        </div>



        {/* Mobile */} 
        <div className="flex items-center justify-between md:hidden w-full h-full ">
            <div className="flex items-center gap-2">
                <img src={Logo} className="w-16 object-cover" alt="logo" />
            </div>

            <div className="justify-flex-end">
                <MdHorizontalSplit className="text-textColor text-2xl" onClick={displayMenu} />
                {showMenu && (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-40 bg-secondary shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-primary px-4 py-2"
                  onClick={() => setShowMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-primary px-4 py-2"
                  onClick={() => setShowMenu(false)}
                >
                  Services
                </li>

                <li
                className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-primary px-4 py-2"
                onClick={() => setShowMenu(false)}
                >
                    Get Social
                </li>
              </ul>
            </motion.div>
                )}
            </div>
        </div>




    </header>
  )
}

export default Header