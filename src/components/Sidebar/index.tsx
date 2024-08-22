import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import SideMenuData from "./SidebarData.json";
import useScreenSize from "../../customHooks/screenDetector";

import './Sidebar.css'

type MenuStatus = {
    [key: string]: boolean
}

const Sidebar = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen)
  const { width, height} = useScreenSize()
  const [metisMenu, setMetisMenu] = useState<MenuStatus>({'metis_1':false})
  const [show, setShow] = useState(false)
  
 
  const openCloseMenu = (menuKey: string, index: number, e: any) => {
    if(width > 768){
        setMetisMenu(prevState => ({
            ...prevState,
            [menuKey]: !prevState[`metis_${index}`]
        }))
    }
  }

  const showAll = () => {
    if(width < 768 || !isSidebarOpen){
        setShow(true)
    }
    return
  }

  const hideAll = () => {
    if(width < 768 || !isSidebarOpen){
        setShow(false)
    }
    return 
  }

  return (
    <div className={`hidden sm:block ${isSidebarOpen ? 'md:w-[240px]' : 'md:w-[60px]' } sm:w-[60px] bg-[#343c49] text-gray-300 sidebar-menu`}>
      <div className="left side-menu">
        <ul className="bg-[#343c49]">
          {SideMenuData.map((side, index) =>
            side.subMenu !== undefined ? (
              <li onMouseOut={hideAll} onMouseOver={showAll} onClick={(e) => openCloseMenu(`metis_${index}`, index, e)} className="group w-[240px] relative">
                <a
                  className={`text-[15px] w-[60px] group-hover:w-[240px] ${isSidebarOpen ? 'md:w-[240px]' : 'md:w-[60px]'} bg-[#343c49] hover:bg-[#2f3642] block py-[14px] px-[20px] relative`}
                  href="#"
                >
                  <i className={`fa ${side.icon} mr-2 group-hover:mr-6 md:group-hover:mr-2`}></i>
                  <span className={`hidden ${isSidebarOpen ? 'md:inline' : 'md:hidden'} group-hover:inline`}>
                    {side.name}
                  </span>
                  <span className={`hidden ${isSidebarOpen ? 'md:block' : 'md:hidden'} text-[12px] text-white float-right arrow-right arrow-right`}></span>
                </a>
                <ul style={{ height : metisMenu[`metis_${index}`] || show ? 37* side.subMenu.length : ''}} 
                    className={`${show ? 'showAll' : '' } hidden ${isSidebarOpen ? 'md:block' : 'md:hidden'} submenu text-sm`}>
                  {side.subMenu.map((menu, index) => (
                    <li>
                      <a
                        className={`hover:bg-blue-600 hover:text-white font-light block py-[8px] pl-[5px] ${isSidebarOpen ? 'md:pl-[45px]' : ''} pr-[20px]`}
                        href="#"
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className={`group ${isSidebarOpen ? 'w-[240px]' : 'w-[60px]'}`}>
                <a
                  className="text-[15px] hover:bg-[#2f3642] block py-[14px] px-[20px] relative group-hover:w-[240px]"
                  href="#"
                >
                  <i className={`fa ${side.icon} mr-2`}></i>
                  <span className={`group-hover:inline hidden ${isSidebarOpen ? 'md:inline' : 'md:hidden'}`}>
                    {side.name}
                  </span>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
