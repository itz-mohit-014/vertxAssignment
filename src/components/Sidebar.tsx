import { Plus } from "lucide-react";
import UserProfile from "./UserProfile";
import navLinks from "../utils/navLinks";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="h-full hidden lg:grid grid-rows-[50px_1fr] grid-cols-[50px_1fr] border-r border-[#1D1D1D]">

      <div className=" col-span-2 px-3 grid grid-cols-[50px_1fr] items-center border-b border-[#1D1D1D]">
        <span className="h-[30px] w-[30px] inline-flex items-center justify-center rounded-full bg-white">
          <img src="/logo.png" alt="vertex logo" className="h-4 w-4" />
        </span>

        <h1 className="font-manrope px-3 text-lg font-bold text-nowrap">
          Vertxlabs, Inc
        </h1>
      </div>

      <div className="border-r border-[#1D1D1D] flex justify-between items-start flex-col">
        <div>
          <UserProfile
            profileUrl="https://randomuser.me/api/portraits/men/75.jpg"
            isOnline={true}
            className="border-b border-[#1D1D1D]"
          />
        </div>

        <UserProfile Icon={Plus} className="border-t border-[#1D1D1D] " />
      </div>

      <nav className="">
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className={`text-base font-bold px-6 py-[15px] ${ pathname === link.href  ? "text-white" : "text-[#555555]" }  `}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>

    </aside>
  );
};

export default Sidebar;
