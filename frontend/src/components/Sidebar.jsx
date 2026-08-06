import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Employees",
      path: "/employees",
      icon: <Users size={20} />,
    },
    {
      name: "Departments",
      path: "/departments",
      icon: <Building2 size={20} />,
    },
  ];

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen flex flex-col">

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-blue-500">
          🚀 WorkFlowX
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Employee Management
        </p>

      </div>

      <nav className="flex-1 p-4">

        {menuItems.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-4 rounded-xl mb-3 transition-all ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>

        ))}

      </nav>

      <div className="p-4 border-t border-slate-800">

        <button className="flex items-center gap-3 w-full p-4 rounded-xl bg-red-600 hover:bg-red-700 transition">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
