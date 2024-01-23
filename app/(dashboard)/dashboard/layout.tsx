import { notFound } from "next/navigation";
import DashboardShell from "~/components/dashboard-shell";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const isAuthenticated = false;

  if (!isAuthenticated) return notFound();
  return <DashboardShell>{children}</DashboardShell>;
}
