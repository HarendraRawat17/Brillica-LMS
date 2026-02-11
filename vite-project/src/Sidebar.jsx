import {NavLink} from "react-router-dom"
import { sidebarComp } from "./sidebarComp/sideBar";

//import logo from "./assets/image.webp"

function Sidebar({navShow, setNavShow , setModalShow}) {
//  console.log("Sidebar", navShow)

const nav = ()=>{
  setNavShow((prev)=> !prev)
}



  const sideBar_tabs_inactive = " pl-2 py-1.5 hover:bg-gray-500 transition rounded flex"
  const sideBar_tabs_active = "bg-gray-500 py-1.5 rounded transition flex mt-1 pl-2 "
  return (
    <div 
    onMouseEnter={nav} 
    onMouseLeave={nav}
    style={{transition: "0.3s "}}
     className={
      navShow
      ? " w-[15%] h-screen bg-indigo-950 px-4 text-zinc-50 m-2 pt-2 rounded-3xl flex flex-col gap-1.5 transition-all"
      : "w-18 h-screen bg-indigo-950 px-4 text-zinc-50 m-2 pt-2 rounded-3xl transition-all "
     }>
      <div>
        {/* <img className="w-31 ml-6 mt-4 mb-3" src={logo} alt="" /> */}
      </div>
      {
        sidebarComp.map((prop) => {
          return (
            <NavLink to={prop.path}
             onClick={prop.onclick ? () => setModalShow(true): undefined}
              className={({ isActive }) =>
                isActive ? sideBar_tabs_active : sideBar_tabs_inactive
              }
              >
              <span className="flex gap-2">
                <prop.icon/>
                {navShow ? (
                  <div
                  style={{transition: "0.3s"}}
                  className="text-[16px] flex justify-center items-center"
                  >
                    {""}
                    {prop.name}
                  </div>
                ) : (
                  <div style={{transition: "0.3s"}}
                  className="text-[0px] flex justify-center items-center"
                  >
                    {""}
                    {prop.name}
                  </div>
                )}
              </span>
            </NavLink>
          )
        })
      }
      
    </div>
  );
};

export default Sidebar;