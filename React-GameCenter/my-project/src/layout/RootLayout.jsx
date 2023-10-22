import { Profile, Navbar } from "../components";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="App text-neutral-200">
      <div className="md:p-10 flex min-h-screen">
        <nav className="bg-[#ef4a47] basis-[10%] md:basis-[20%] flex  items-center flex-col">
          <h1 className="my-10 text-3xl font-bold">Gamer Center</h1>
          <Profile />
          <Navbar />
        </nav>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
