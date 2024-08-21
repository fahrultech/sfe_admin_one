import React, { useState } from "react";
import SideMenuData from "./SidebarData.json";
import './Sidebar.css'

type MenuStatus = {
    [key: string]: boolean
}

const Sidebar = () => {
  const [metisMenu, setMetisMenu] = useState<MenuStatus>({'metis_1':false})
 
  const openCloseMenu = (menuKey: string, index: number, e: any) => {
    setMetisMenu(prevState => ({
        ...prevState,
        [menuKey]: !prevState[`metis_${index}`]
    }))
  }

  return (
    <div className="hidden sm:block md:w-[240px] sm:w-[60px] bg-[#343c49] text-gray-300 sidebar-menu">
      <div className="left side-menu">
        <ul className="bg-[#343c49]">
          {SideMenuData.map((side, index) =>
            side.subMenu !== undefined ? (
              <li onClick={(e) => openCloseMenu(`metis_${index}`, index, e)} className="group w-[240px] relative">
                <a
                  className="text-[15px] w-[60px] group-hover:w-[240px] md:w-[240px] bg-[#343c49] hover:bg-[#2f3642] block py-[14px] px-[20px] relative"
                  href="#"
                >
                  <i className={`fa ${side.icon} mr-2 group-hover:mr-6 md:group-hover:mr-2`}></i>
                  <span className="hidden md:inline group-hover:inline">
                    {side.name}
                  </span>
                  <span className="hidden md:block text-[12px] text-white float-right arrow-right arrow-right"></span>
                </a>
                <ul style={{ height : metisMenu[`metis_${index}`] ? 37* side.subMenu.length : ''}} 
                    className={`
                            group-hover:overflow-visible
                            group-hover:h-100
                            group-hover:inline
                            md:group-hover:block
                            hidden
                            md:block
                            submenu 
                            text-sm`}
                    >
                  {side.subMenu.map((menu, index) => (
                    <li>
                      <a
                        className="group-hover:ml-[14px]  md:group-hover:ml-0 group-hover:bg-[#343c49] hover:bg-blue-600 hover:text-white font-light block py-[8px] pl-[45px] pr-[20px]"
                        href="#"
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className="group w-[240px]">
                <a
                  className="text-[15px] hover:bg-[#2f3642] block py-[14px] px-[20px] relative"
                  href="#"
                >
                  <i className={`fa ${side.icon} mr-2`}></i>
                  <span className="group-hover:inline group-hover:w-[240px] group-hover:bg-[#2f3642] hidden md:inline">
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
