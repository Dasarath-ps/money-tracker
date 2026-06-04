"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AddButton from './AddButton';

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "flex items-center gap-3 bg-primary text-on-primary rounded-full px-6 py-3 shadow-[0_8px_16px_rgba(224,64,160,0.3)] hover:scale-[1.03] active:scale-95 transition-transform";
    }
    return "flex items-center gap-3 text-on-surface-variant hover:bg-secondary-container/30 hover:text-secondary rounded-full px-6 py-3 transition-all hover:scale-[1.03] active:scale-95";
  };

  const getIconClass = (path: string) => {
    return pathname === path ? "material-symbols-outlined filled" : "material-symbols-outlined";
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-surface-variant/50 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <nav className={`fixed left-0 top-0 h-screen w-72 flex-col p-6 z-50 bg-surface-container-low rounded-r-xl shadow-[8px_0_24px_rgba(124,82,170,0.15)] transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} flex`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 pl-2">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-primary-playful">
            <span className="material-symbols-outlined filled text-on-primary text-3xl">favorite</span>
          </div>
          <div>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic tracking-tight">Candy Cash</h1>
            <p className="text-sm font-medium text-secondary">Financial Joy</p>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1 space-y-3 font-body font-semibold text-label-lg">
          <Link className={getLinkClass('/')} href="/">
            <span className={getIconClass('/')}>dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link className={getLinkClass('/transactions')} href="/transactions">
            <span className={getIconClass('/transactions')}>receipt_long</span>
            <span>Transactions</span>
          </Link>
          <Link className={getLinkClass('/ai-insights')} href="/ai-insights">
            <span className={getIconClass('/ai-insights')}>auto_awesome</span>
            <span>AI Insights</span>
          </Link>
          <Link className={getLinkClass('/settings')} href="/settings">
            <span className={getIconClass('/settings')}>settings</span>
            <span>Settings</span>
          </Link>
        </div>
        
        {/* CTA */}
        <div className="mt-auto pl-6 pb-6 md:pl-0 md:pb-0">
          <AddButton />
        </div>
      </nav>
    </>
  );
}
