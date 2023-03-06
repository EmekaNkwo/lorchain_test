function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main>{children}</main>
    </div>
  );
}

export default Layout;
