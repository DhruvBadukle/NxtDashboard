import Dashboard from "@/components/Dashboard/Dashboard";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-[220px_1fr] gap-4 p-4 min-h-screen bg-gray-100">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
