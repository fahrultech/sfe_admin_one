import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/actions/actions";
import { RootState } from "../../redux/types";

const Admin = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen)
  const dispatch = useDispatch()
  const openCloseSidebar = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div className="flex flex-col bg-red-400 mx-auto">
      <div className="topbar flex fixed w-full">
        <div className={`py-[14px] px-[20px] text-blue-400 text-[30px] font-bold left-topbar w-[60px] ${isSidebarOpen ? 'md:w-[240px]' : 'md:w-[60px]'} h-[70px] bg-[#343c49] text-white`}>
          <span className="hidden md:block">{isSidebarOpen ? 'Admin One' : 'A'}</span> <span className="md:hidden">A</span>
        </div>
        <div className="py-[20px] px-[20px] right-topbar flex-grow bg-blue-600">
          <button onClick={openCloseSidebar}>
            <i className="fa fa-bars text-white"></i>
          </button>
          <input
            placeholder="Search"
            className="text-white py-0.5 px-1 ml-4 rounded-xl bg-blue-700 outline-none"
            type="text"
          />
        </div>
      </div>
      <div className="leading-6 flex h-screen mt-[70px]">
        <Sidebar />
        <div className="content flex-grow bg-white py-[14px] px-[20px]"></div>
      </div>
    </div>
  );
};

export default Admin;
