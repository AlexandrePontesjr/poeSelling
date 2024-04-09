import { ChevronFirst, ChevronLast, DoorOpen } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)

  function logout() {
    localStorage.removeItem("token")
    window.location.reload();
  }
  
  return (
    <aside className="h-screen">
      <nav className={`h-full flex flex-col bg-slate-950 border-r shadow-sm ${
          expanded ? "wl-52" : "w-21"
        }`}>
        <div className="p-4 pb-2 flex justify-between items-center">
        <img className={` mx-auto ${expanded ? "wl-52 h-32" : "w-8 h-8"}`} src={logo} alt="logo"/>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-white hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/08/Path_of_Exile_Logo.png"
            alt=""
            className="w-14 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white">{localStorage.username}</h4>
            </div>
            <DoorOpen onClick={logout} className="text-white cursor-pointer" size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert, path }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <Link to={path}>
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          expanded ? "wl-52" : "w-12"
        }
        ${
          active
            ? "bg-gradient-to-tr from-yellow-400 to-white text-black"
            : "hover:bg-yellow-300 text-slate-600"
        }
    `}
    >
      
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-3 py-1 ml-3
          bg-black text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
      
    </li>
    </Link>
  );
}