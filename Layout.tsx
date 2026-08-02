import { ReactNode, useEffect } from 'react';
import { TopNav } from './TopNav';
import { BottomBar } from './BottomBar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  cart: string[];
}

export function Layout({ children, cart }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-oat flex flex-col relative pb-24">
      <TopNav />
      <main className="flex-grow w-full">
        {children}
      </main>
      <BottomBar cart={cart} />
    </div>
  );
}
