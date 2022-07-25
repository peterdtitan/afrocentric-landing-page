import React, { useState} from 'react';
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
import { MdHorizontalSplit } from "react-icons/md";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const displayMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        {/* Desktop */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <motion.div    
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
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
                    <motion.li
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.8 }} 
                    className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        About Us
                    </motion.li>

                    <motion.li
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.8 }} 
                    className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Our Services
                    </motion.li>

                    <motion.li 
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.8 }}
                    className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                        Get Social
                    </motion.li>
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
                  Our Services
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

export default NavBar