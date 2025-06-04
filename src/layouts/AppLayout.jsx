import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main className="w-full min-h-screen justify-between bg-[url('/bg.svg')] bg-cover safe-bottom">
      <Outlet />
    </main>
  );
}
