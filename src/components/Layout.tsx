import React, { ReactNode } from 'react';
import TopNav from './navigation/TopNav';
import MainNav from './navigation/MainNav';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <MainNav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;