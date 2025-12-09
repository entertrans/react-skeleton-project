import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}