export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="main-h-screen">{children}</main>;
}
