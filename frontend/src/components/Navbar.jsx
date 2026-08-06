import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 h-20 px-8 flex items-center justify-between">

      <div className="flex items-center bg-slate-800 rounded-xl px-4 py-3 w-[400px]">

        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white ml-3 w-full"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer hover:text-blue-500" />

        <div className="flex items-center gap-3">

          <UserCircle size={36} />

          <div>

            <h4 className="font-semibold">Admin</h4>

            <p className="text-sm text-slate-400">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
