import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex">
      {/* include shared UI here e.g. a header or sidebar */}
      <Sidebar />
      {children}
    </section>
  );
}
